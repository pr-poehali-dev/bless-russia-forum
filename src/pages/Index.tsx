import Header from "@/components/Header";
import ForumSection from "@/components/ForumSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const governmentSections = [
    {
      title: "ФСБ",
      description: "Федеральная служба безопасности",
      icon: "Shield",
      topics: 45,
      posts: 234,
      lastPost: "2 часа назад",
    },
    {
      title: "МВД",
      description: "Министерство внутренних дел",
      icon: "Car",
      topics: 67,
      posts: 445,
      lastPost: "1 час назад",
    },
    {
      title: "МЧС",
      description: "Министерство чрезвычайных ситуаций",
      icon: "Flame",
      topics: 23,
      posts: 156,
      lastPost: "4 часа назад",
    },
    {
      title: "Больница",
      description: "Медицинские учреждения",
      icon: "Heart",
      topics: 34,
      posts: 198,
      lastPost: "3 часа назад",
    },
    {
      title: "Военная часть",
      description: "Вооруженные силы",
      icon: "Zap",
      topics: 56,
      posts: 312,
      lastPost: "30 мин назад",
    },
    {
      title: "ГИБДД",
      description: "Дорожно-патрульная служба",
      icon: "MapPin",
      topics: 78,
      posts: 567,
      lastPost: "1 час назад",
    },
    {
      title: "Правительство",
      description: "Административные структуры",
      icon: "Building",
      topics: 89,
      posts: 678,
      lastPost: "45 мин назад",
    },
  ];

  const gangSections = [
    {
      title: "Воровские авторитеты",
      description: "Элитные криминальные группировки",
      icon: "Crown",
      topics: 234,
      posts: 1456,
      lastPost: "15 мин назад",
    },
    {
      title: "Мафиозные семьи",
      description: "Организованные преступные группы",
      icon: "Users",
      topics: 156,
      posts: 987,
      lastPost: "25 мин назад",
    },
    {
      title: "Байкерские клубы",
      description: "Мотоциклетные братства",
      icon: "Bike",
      topics: 98,
      posts: 654,
      lastPost: "1 час назад",
    },
    {
      title: "Уличные банды",
      description: "Районные группировки",
      icon: "Skull",
      topics: 123,
      posts: 789,
      lastPost: "2 часа назад",
    },
  ];

  const generalSections = [
    {
      title: "Правила форума",
      description: "Основные правила и положения",
      icon: "BookOpen",
      topics: 5,
      posts: 45,
      lastPost: "1 день назад",
    },
    {
      title: "Поддержка",
      description: "Техническая помощь и вопросы",
      icon: "HelpCircle",
      topics: 67,
      posts: 234,
      lastPost: "3 часа назад",
    },
    {
      title: "Общий чат",
      description: "Свободное общение игроков",
      icon: "MessageCircle",
      topics: 456,
      posts: 2345,
      lastPost: "5 мин назад",
    },
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Добро пожаловать в Bless Russia
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Официальный форум игрового сервера с системой рангов и структурами
            власти
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gaming-gray/20 border-gaming-red/30">
            <CardHeader className="text-center">
              <Icon
                name="Users"
                className="mx-auto text-gaming-gold mb-2"
                size={32}
              />
              <CardTitle className="text-white">Игроков онлайн</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-gaming-red">1,247</p>
            </CardContent>
          </Card>

          <Card className="bg-gaming-gray/20 border-gaming-red/30">
            <CardHeader className="text-center">
              <Icon
                name="MessageSquare"
                className="mx-auto text-gaming-gold mb-2"
                size={32}
              />
              <CardTitle className="text-white">Всего тем</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-gaming-red">3,456</p>
            </CardContent>
          </Card>

          <Card className="bg-gaming-gray/20 border-gaming-red/30">
            <CardHeader className="text-center">
              <Icon
                name="MessageCircle"
                className="mx-auto text-gaming-gold mb-2"
                size={32}
              />
              <CardTitle className="text-white">Сообщений</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-gaming-red">45,678</p>
            </CardContent>
          </Card>

          <Card className="bg-gaming-gray/20 border-gaming-red/30">
            <CardHeader className="text-center">
              <Icon
                name="Clock"
                className="mx-auto text-gaming-gold mb-2"
                size={32}
              />
              <CardTitle className="text-white">Время сервера</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-gaming-red">15:42</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="government" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gaming-gray/30">
            <TabsTrigger
              value="government"
              className="data-[state=active]:bg-gaming-red"
            >
              Госструктуры
            </TabsTrigger>
            <TabsTrigger
              value="gangs"
              className="data-[state=active]:bg-gaming-red"
            >
              ОПГ
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-gaming-red"
            >
              Общие разделы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="government" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {governmentSections.map((section, index) => (
                <ForumSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                  topics={section.topics}
                  posts={section.posts}
                  lastPost={section.lastPost}
                  isGovernment={true}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gangs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gangSections.map((section, index) => (
                <ForumSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                  topics={section.topics}
                  posts={section.posts}
                  lastPost={section.lastPost}
                  isGang={true}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {generalSections.map((section, index) => (
                <ForumSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                  topics={section.topics}
                  posts={section.posts}
                  lastPost={section.lastPost}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gaming-red hover:bg-red-700 text-white animate-glow"
          >
            <Icon name="Rocket" className="mr-2" size={20} />
            Присоединиться к игре
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
