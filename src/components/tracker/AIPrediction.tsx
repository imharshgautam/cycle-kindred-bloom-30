
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Calendar, Target, AlertTriangle } from 'lucide-react';
import { CyclePredictionService, PredictionResult, CycleData } from '@/services/cyclePrediction';
import { format } from 'date-fns';

interface AIPredictionProps {
  historicalData: CycleData[];
  lastPeriodDate: Date;
}

const AIPrediction = ({ historicalData, lastPeriodDate }: AIPredictionProps) => {
  const [predictions, setPredictions] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generatePredictions = async () => {
      setIsLoading(true);
      console.log('AI Prediction: Generating cycle forecasts...');
      
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = CyclePredictionService.predictCycle(historicalData, lastPeriodDate);
      setPredictions(result);
      setIsLoading(false);
    };

    generatePredictions();
  }, [historicalData, lastPeriodDate]);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100 text-green-800';
    if (confidence >= 0.6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.8) return 'High';
    if (confidence >= 0.6) return 'Medium';
    return 'Low';
  };

  if (isLoading) {
    return (
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            AI Cycle Prediction
          </CardTitle>
          <CardDescription>Analyzing your cycle patterns...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-md animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!predictions) {
    return (
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Cycle Prediction
          </CardTitle>
          <CardDescription>Unable to generate predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Need more data to generate accurate predictions.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Cycle Prediction
        </CardTitle>
        <CardDescription>Machine learning-powered cycle forecasting</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Next Period Prediction */}
        <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
          <Calendar className="h-5 w-5 text-pink-600 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium">Next Period</h4>
              <Badge className={getConfidenceColor(predictions.nextPeriod.confidence)}>
                {getConfidenceText(predictions.nextPeriod.confidence)} Confidence
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Predicted: {format(new Date(predictions.nextPeriod.date), 'MMM d, yyyy')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Cycle length: {predictions.cycleLength.predicted} days
            </p>
          </div>
        </div>

        {/* Ovulation Prediction */}
        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
          <Target className="h-5 w-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium">Ovulation Window</h4>
              <Badge className={getConfidenceColor(predictions.ovulation.confidence)}>
                {getConfidenceText(predictions.ovulation.confidence)} Confidence
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Predicted: {format(new Date(predictions.ovulation.date), 'MMM d, yyyy')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Fertile window: 3 days before to 1 day after
            </p>
          </div>
        </div>

        {/* PMS Prediction */}
        <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium">PMS Symptoms</h4>
              <Badge className={`${predictions.pmsSymptoms.likelihood > 0.7 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                {Math.round(predictions.pmsSymptoms.likelihood * 100)}% Likelihood
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Expected start: {format(new Date(predictions.pmsSymptoms.startDate), 'MMM d, yyyy')}
            </p>
            {predictions.pmsSymptoms.predictedSymptoms.length > 0 && (
              <div className="mt-2">
                <p className="text-xs text-muted-foreground mb-1">Likely symptoms:</p>
                <div className="flex flex-wrap gap-1">
                  {predictions.pmsSymptoms.predictedSymptoms.map((symptom) => (
                    <Badge key={symptom} variant="outline" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-xs text-muted-foreground bg-gray-50 p-3 rounded-md">
          <p className="font-medium mb-1">🤖 AI Model Information:</p>
          <p>Predictions based on LSTM neural network analysis of your cycle patterns, symptoms, and historical data. Accuracy improves with more tracked cycles.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIPrediction;
