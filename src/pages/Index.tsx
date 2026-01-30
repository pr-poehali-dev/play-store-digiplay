import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  trending: boolean;
}

const mockGames: Game[] = [
  { id: 1, title: 'Cyber Warriors 2077', category: 'Экшен', rating: 4.8, reviews: 12500, price: '₽1,999', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400', trending: true },
  { id: 2, title: 'Pixel Kingdom', category: 'РПГ', rating: 4.6, reviews: 8900, price: '₽899', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400', trending: true },
  { id: 3, title: 'Space Odyssey', category: 'Симулятор', rating: 4.9, reviews: 15200, price: '₽2,499', image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400', trending: false },
  { id: 4, title: 'Racing Legends', category: 'Гонки', rating: 4.7, reviews: 9800, price: '₽1,499', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400', trending: true },
  { id: 5, title: 'Mystery Manor', category: 'Приключения', rating: 4.5, reviews: 6700, price: '₽699', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400', trending: false },
  { id: 6, title: 'Battle Royale X', category: 'Мультиплеер', rating: 4.8, reviews: 22100, price: 'Бесплатно', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400', trending: true },
];

const categories = ['Все игры', 'Экшен', 'РПГ', 'Симулятор', 'Гонки', 'Приключения', 'Мультиплеер'];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все игры');

  const filteredGames = mockGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все игры' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 gradient-gaming backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-gaming rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-white">DIplay</h1>
              <p className="text-xs text-white/70">by Digiplay</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`font-medium transition-colors ${activeTab === 'home' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveTab('catalog')}
              className={`font-medium transition-colors ${activeTab === 'catalog' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveTab('top')}
              className={`font-medium transition-colors ${activeTab === 'top' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Топ игры
            </button>
            <button 
              onClick={() => setActiveTab('categories')}
              className={`font-medium transition-colors ${activeTab === 'categories' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Категории
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="Bell" size={20} />
            </Button>
            <Button 
              onClick={() => setActiveTab('profile')}
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
            >
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-2xl gradient-gaming p-12 text-center">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-heading text-5xl font-bold text-white mb-4">
                  Откройте мир игр на DIplay
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Тысячи игр, миллионы игроков. Найдите свою следующую любимую игру!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Популярное
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-3xl font-bold mb-2">🔥 Трендовые игры</h3>
                  <p className="text-muted-foreground">Самые популярные игры этой недели</p>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockGames.filter(g => g.trending).map((game) => (
                  <Card key={game.id} className="gradient-card border-border overflow-hidden hover-glow group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          {game.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {game.title}
                      </h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold">{game.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {game.reviews.toLocaleString()} отзывов
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-heading font-bold text-gradient">
                          {game.price}
                        </span>
                        <Button size="sm" className="gradient-gaming hover:opacity-90">
                          <Icon name="ShoppingCart" size={16} className="mr-1" />
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Искать игры..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              <Button variant="outline" className="border-border">
                <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                Фильтры
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  className={selectedCategory === cat ? 'gradient-gaming' : 'border-border'}
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredGames.map((game) => (
                <Card key={game.id} className="gradient-card border-border overflow-hidden hover-glow group cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{game.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-gradient">
                        {game.price}
                      </span>
                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'top' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">🏆 Топ игры</h2>
              <p className="text-muted-foreground text-lg">Лучшие игры по рейтингу пользователей</p>
            </div>
            <div className="space-y-4">
              {mockGames
                .sort((a, b) => b.rating - a.rating)
                .map((game, index) => (
                  <Card key={game.id} className="gradient-card border-border hover-glow">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 gradient-gaming rounded-full flex items-center justify-center">
                        <span className="font-heading text-3xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-bold mb-1">{game.title}</h3>
                        <p className="text-muted-foreground mb-2">{game.category}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-bold text-lg">{game.rating}</span>
                          </div>
                          <span className="text-muted-foreground">
                            {game.reviews.toLocaleString()} отзывов
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-heading font-bold text-gradient mb-3">
                          {game.price}
                        </div>
                        <Button className="gradient-gaming hover:opacity-90">
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">📂 Категории игр</h2>
              <p className="text-muted-foreground text-lg">Исследуйте игры по жанрам</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.filter(c => c !== 'Все игры').map((category) => {
                const gamesInCategory = mockGames.filter(g => g.category === category);
                return (
                  <Card key={category} className="gradient-card border-border hover-glow cursor-pointer group">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 gradient-gaming rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                        <Icon name="Gamepad2" size={36} className="text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-gradient transition-colors">
                        {category}
                      </h3>
                      <p className="text-muted-foreground">
                        {gamesInCategory.length} игр
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <Card className="gradient-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 gradient-gaming rounded-full flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-bold mb-2">Игрок #12345</h2>
                    <p className="text-muted-foreground">Присоединился в январе 2024</p>
                  </div>
                </div>
                <Tabs defaultValue="library" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-muted/30">
                    <TabsTrigger value="library">Библиотека</TabsTrigger>
                    <TabsTrigger value="wishlist">Желаемое</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                  </TabsList>
                  <TabsContent value="library" className="mt-6">
                    <div className="text-center py-12">
                      <Icon name="Library" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground text-lg">Ваша библиотека игр пуста</p>
                      <Button className="gradient-gaming mt-4">
                        Перейти в каталог
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="wishlist" className="mt-6">
                    <div className="text-center py-12">
                      <Icon name="Heart" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground text-lg">Список желаемого пуст</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-6">
                    <div className="text-center py-12">
                      <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground text-lg">Вы пока не оставили отзывов</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">DIplay</h4>
              <p className="text-muted-foreground text-sm">
                Ваш игровой маркетплейс от Digiplay
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Топ игры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категории</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-border hover:border-primary">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border hover:border-primary">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="border-border hover:border-primary">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Digiplay. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}