
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { CycleData } from "@/services/cyclePrediction";

interface HistoryTableProps {
  data: CycleData[];
}

const symptomColors: Record<string, string> = {
  "Cramps": "bg-pink-200 text-pink-800",
  "Headache": "bg-yellow-100 text-yellow-800",
  "Backache": "bg-orange-100 text-orange-900",
  "Fatigue": "bg-blue-100 text-blue-700",
  "Bloating": "bg-amber-50 text-amber-700",
  "Acne": "bg-fuchsia-100 text-fuchsia-700",
  "Mood Swings": "bg-indigo-100 text-indigo-700",
  "Cravings": "bg-lime-100 text-lime-700",
  "Insomnia": "bg-cyan-100 text-cyan-700",
  "Breast Tenderness": "bg-purple-100 text-purple-700",
};

function formatFlow(flowIntensity?: number) {
  switch (flowIntensity) {
    case 1: return "Light";
    case 2: return "Medium";
    case 3: return "Heavy";
    default: return "None";
  }
}

export default function HistoryTable({ data }: HistoryTableProps) {
  return (
    <Card className="border-2 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          History
        </CardTitle>
        <CardDescription>Recent period records</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Flow</TableHead>
              <TableHead>Symptoms</TableHead>
              <TableHead>Mood</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry, idx) => (
              <TableRow key={entry.date + idx}>
                <TableCell>
                  {format(new Date(entry.date), "MMM d, yyyy")}
                </TableCell>
                <TableCell>
                  <Badge className={entry.flowIntensity === 3 ? "bg-rose-300 text-white" : entry.flowIntensity === 2 ? "bg-pink-200 text-rose-900" : entry.flowIntensity === 1 ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-gray-700"}>
                    {formatFlow(entry.flowIntensity)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-0.5">
                    {entry.symptoms?.length
                      ? entry.symptoms.map(symptom => (
                          <span key={symptom} className={`rounded px-2 py-0.5 text-xs font-medium ${symptomColors[symptom] || "bg-slate-200 text-gray-600"}`}>{symptom}</span>
                        ))
                      : <span className="text-xs text-muted-foreground">None</span>
                    }
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize border-2">
                    {entry.mood}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
