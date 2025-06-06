
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Share, Heart, Users, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PartnerSharing = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const { toast } = useToast();

  const generateShareLink = () => {
    // Generate a unique sharing link (in real app, this would be from backend)
    const uniqueId = Math.random().toString(36).substr(2, 9);
    const link = `${window.location.origin}/shared-cycle/${uniqueId}`;
    setShareLink(link);
    return link;
  };

  const handleEnableSharing = () => {
    if (!isSharing) {
      const link = generateShareLink();
      setIsSharing(true);
      toast({
        title: "Sharing enabled",
        description: "Your partner can now access your cycle information.",
        duration: 3000
      });
    } else {
      setIsSharing(false);
      setShareLink("");
      toast({
        title: "Sharing disabled",
        description: "Your cycle information is now private.",
        duration: 3000
      });
    }
  };

  const copyShareLink = async () => {
    if (shareLink) {
      try {
        await navigator.clipboard.writeText(shareLink);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
        toast({
          title: "Link copied",
          description: "Share link copied to clipboard.",
          duration: 2000
        });
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Could not copy link to clipboard.",
          variant: "destructive",
          duration: 2000
        });
      }
    }
  };

  const sendInvite = () => {
    if (partnerEmail && shareLink) {
      // In real app, this would send an email
      toast({
        title: "Invite sent",
        description: `Invitation sent to ${partnerEmail}`,
        duration: 3000
      });
      setPartnerEmail("");
    }
  };

  return (
    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu card-3d group">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative z-20">
        <CardTitle className="text-xl font-bold group-hover:text-pink-600 transition-colors duration-300 flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <Share className="h-5 w-5 text-pink-500" />
          </div>
          Partner Sharing
        </CardTitle>
        <CardDescription>Share your cycle information with your partner</CardDescription>
      </CardHeader>
      <CardContent className="relative z-20 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div>
              <Label htmlFor="sharing-toggle" className="font-medium">
                Enable Partner Access
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow your partner to view your cycle data
              </p>
            </div>
          </div>
          <Switch
            id="sharing-toggle"
            checked={isSharing}
            onCheckedChange={handleEnableSharing}
          />
        </div>

        {isSharing && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 bg-gradient-to-r from-pink-50/80 to-purple-50/80 border border-pink-200/50 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-500" />
                <p className="font-medium text-sm">Sharing is active</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Your partner can view your cycle phases, symptoms, and predictions (mood notes remain private)
              </p>
            </div>

            <div className="space-y-3">
              <Label>Share Link</Label>
              <div className="flex gap-2">
                <Input
                  value={shareLink}
                  readOnly
                  className="text-sm bg-white/70 backdrop-blur-sm border-2 border-white/50"
                />
                <Button
                  onClick={copyShareLink}
                  variant="outline"
                  size="sm"
                  className="shrink-0 border-2 bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/90"
                >
                  {linkCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="partner-email">Send Direct Invite</Label>
              <div className="flex gap-2">
                <Input
                  id="partner-email"
                  type="email"
                  placeholder="partner@example.com"
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  className="bg-white/70 backdrop-blur-sm border-2 border-white/50"
                />
                <Button
                  onClick={sendInvite}
                  disabled={!partnerEmail}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shrink-0"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}

        {!isSharing && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-sm text-muted-foreground">
              Enable sharing to connect with your partner
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PartnerSharing;
