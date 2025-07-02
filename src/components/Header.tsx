import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ranks = [
  { level: 0, name: "Гражданский", color: "bg-gray-600" },
  { level: 1, name: "Рядовой", color: "bg-green-600" },
  { level: 2, name: "Младший сержант", color: "bg-green-700" },
  { level: 3, name: "Сержант", color: "bg-blue-600" },
  { level: 4, name: "Старший сержант", color: "bg-blue-700" },
  { level: 5, name: "Прапорщик", color: "bg-purple-600" },
  { level: 6, name: "Лейтенант", color: "bg-yellow-600" },
  { level: 7, name: "Капитан", color: "bg-orange-600" },
  { level: 8, name: "Майор", color: "bg-red-600" },
  { level: 9, name: "Полковник", color: "bg-red-700" },
  { level: 10, name: "Генерал", color: "bg-gaming-gold" },
];

export default function Header() {
  return (
    <header className="bg-gaming-dark border-b border-gaming-red/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon
                name="Shield"
                className="text-gaming-red animate-glow"
                size={32}
              />
              <h1 className="text-2xl font-heading font-bold text-white">
                Bless Russia
              </h1>
            </div>
            <Badge
              variant="outline"
              className="border-gaming-red text-gaming-red"
            >
              Форум
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Icon name="Star" className="text-gaming-gold" size={16} />
              <span className="text-sm text-gray-300">Ранг:</span>
              <Badge className={`${ranks[5].color} text-white`}>
                {ranks[5].name}
              </Badge>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white"
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
