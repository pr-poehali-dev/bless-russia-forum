import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ForumSectionProps {
  title: string;
  description: string;
  icon: string;
  topics: number;
  posts: number;
  lastPost: string;
  isGovernment?: boolean;
  isGang?: boolean;
}

export default function ForumSection({
  title,
  description,
  icon,
  topics,
  posts,
  lastPost,
  isGovernment = false,
  isGang = false,
}: ForumSectionProps) {
  const getBadgeColor = () => {
    if (isGovernment) return "bg-blue-600 hover:bg-blue-700";
    if (isGang) return "bg-gaming-red hover:bg-red-700";
    return "bg-gaming-gray hover:bg-gray-600";
  };

  const getCardStyle = () => {
    if (isGovernment) return "border-blue-500/30 bg-blue-950/20";
    if (isGang) return "border-gaming-red/30 bg-red-950/20";
    return "border-gaming-gray/30 bg-gaming-gray/10";
  };

  return (
    <Card
      className={`${getCardStyle()} hover:border-gaming-red/50 transition-all duration-300 cursor-pointer group`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gaming-dark/50">
              <Icon
                name={icon}
                className="text-gaming-gold group-hover:text-gaming-red transition-colors"
                size={24}
              />
            </div>
            <div>
              <CardTitle className="text-white font-heading text-lg group-hover:text-gaming-red transition-colors">
                {title}
              </CardTitle>
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
          </div>
          <Badge className={`${getBadgeColor()} text-white`}>
            {isGovernment ? "Гос" : isGang ? "ОПГ" : "Общий"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm">
          <div className="flex space-x-4 text-gray-400">
            <span className="flex items-center space-x-1">
              <Icon name="MessageSquare" size={14} />
              <span>{topics} тем</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="MessageCircle" size={14} />
              <span>{posts} сообщений</span>
            </span>
          </div>
          <span className="text-xs text-gray-500">{lastPost}</span>
        </div>
      </CardContent>
    </Card>
  );
}
