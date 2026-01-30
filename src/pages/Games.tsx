import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
  { id: 7, title: 'Shadow Quest', category: 'РПГ', rating: 4.7, reviews: 11300, price: '₽1,699', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', trending: false },
  { id: 8, title: 'City Builder Pro', category: 'Симулятор', rating: 4.6, reviews: 7800, price: '₽999', image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=400', trending: false },
];

const categories = ['Все игры', 'Экшен', 'РПГ', 'Симулятор', 'Гонки', 'Приключения', 'Мультиплеер'];

export default function Games() {
  const navigate = useNavigate();
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <Icon name="ArrowLeft" size={24} />
            </Button>
            <div className="w-10 h-10 gradient-gaming rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-white">DIplay</h1>
              <p className="text-xs text-white/70">by Digiplay</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-2">🎮 Каталог игр</h2>
            <p className="text-muted-foreground text-lg">Найдите свою следующую любимую игру</p>
          </div>

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
                className={selectedCategory === cat ? 'gradient-gaming text-white' : 'border-border'}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredGames.map((game) => (
              <Card key={game.id} className="gradient-card border-border overflow-hidden hover-glow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {game.trending && (
                    <div className="absolute top-3 left-3">
                      <Badge className="gradient-gaming text-white font-semibold">
                        🔥 Trending
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {game.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
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
                    <span className="text-xl font-heading font-bold text-gradient">
                      {game.price}
                    </span>
                    <Button size="sm" className="gradient-gaming text-white hover:opacity-90">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
