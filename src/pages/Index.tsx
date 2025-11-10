import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedGarment, setSelectedGarment] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const garments = [
    { id: '1', name: 'Классическая рубашка', category: 'Рубашки', price: '4 990 ₽', color: 'Белый' },
    { id: '2', name: 'Брюки чинос', category: 'Брюки', price: '5 990 ₽', color: 'Бежевый' },
    { id: '3', name: 'Шерстяной свитер', category: 'Свитера', price: '7 990 ₽', color: 'Серый' },
    { id: '4', name: 'Джинсы slim fit', category: 'Джинсы', price: '6 490 ₽', color: 'Синий' },
    { id: '5', name: 'Кардиган', category: 'Кардиганы', price: '8 990 ₽', color: 'Черный' },
    { id: '6', name: 'Футболка базовая', category: 'Футболки', price: '1 990 ₽', color: 'Белый' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">VIRTUOSO</h1>
          
          <button 
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>

          <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full left-0 right-0 lg:top-auto flex-col lg:flex-row gap-8 bg-background lg:bg-transparent p-4 lg:p-0 border-b lg:border-0 border-border`}>
            {['home', 'fitting', 'catalog', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm tracking-wider transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'ГЛАВНАЯ'}
                {section === 'fitting' && 'ПРИМЕРОЧНАЯ'}
                {section === 'catalog' && 'КАТАЛОГ'}
                {section === 'about' && 'О НАС'}
                {section === 'contact' && 'КОНТАКТЫ'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
          <img 
            src="https://cdn.poehali.dev/projects/0b3f0a43-5ace-4afc-a7be-2ceae6949e50/files/6f9d5c42-7077-4827-bfca-9ae432b19da9.jpg"
            alt="Mannequin"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">ОНЛАЙН ШОППИНГ</p>
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Виртуальная<br />примерочная
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Примерьте одежду на интерактивном 3D-манекене<br />не выходя из дома
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider"
              onClick={() => scrollToSection('fitting')}
            >
              НАЧАТЬ ПРИМЕРКУ
            </Button>
          </div>
        </section>

        <section id="fitting" className="min-h-screen py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">FITTING ROOM</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Виртуальная примерочная</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выберите предмет одежды из каталога и посмотрите, как он выглядит на модели
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-card border-border animate-scale-in">
                <div className="aspect-[3/4] bg-secondary/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/0b3f0a43-5ace-4afc-a7be-2ceae6949e50/files/6f9d5c42-7077-4827-bfca-9ae432b19da9.jpg"
                    alt="3D Mannequin"
                    className="w-full h-full object-cover"
                  />
                  {selectedGarment && (
                    <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-sm font-medium">
                        {garments.find(g => g.id === selectedGarment)?.name}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" size="sm">
                    <Icon name="RotateCw" size={16} className="mr-2" />
                    Повернуть
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ZoomIn" size={16} className="mr-2" />
                    Увеличить
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Ruler" size={16} className="mr-2" />
                    Размеры
                  </Button>
                </div>
              </Card>

              <div className="space-y-4 animate-slide-in-right">
                <h3 className="text-xl font-semibold mb-4">Выберите одежду</h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                  {garments.map((garment) => (
                    <Card
                      key={garment.id}
                      className={`p-4 cursor-pointer transition-all hover:border-primary ${
                        selectedGarment === garment.id ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => setSelectedGarment(garment.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">{garment.name}</h4>
                          <p className="text-sm text-muted-foreground">{garment.category} · {garment.color}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{garment.price}</p>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            className="mt-1"
                          >
                            Примерить
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">COLLECTION</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Каталог</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наша коллекция базовой одежды высокого качества
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {garments.map((garment, index) => (
                <Card key={garment.id} className="overflow-hidden group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-[3/4] bg-secondary/30 relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/0b3f0a43-5ace-4afc-a7be-2ceae6949e50/files/dfa439ab-5e37-41f7-8ce4-9b365057afef.jpg"
                      alt={garment.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-wider text-muted-foreground mb-2">{garment.category}</p>
                    <h3 className="font-medium mb-2">{garment.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">{garment.price}</p>
                      <Button 
                        size="sm"
                        onClick={() => {
                          setSelectedGarment(garment.id);
                          scrollToSection('fitting');
                        }}
                      >
                        Примерить
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-light mb-8">О нас</h2>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed animate-fade-in">
              <p>
                VIRTUOSO — это инновационная платформа для онлайн-шоппинга, которая революционизирует 
                способ покупки одежды в интернете. Мы объединили передовые технологии 3D-моделирования 
                с удобным интерфейсом.
              </p>
              <p>
                Наша виртуальная примерочная позволяет вам увидеть, как одежда выглядит на модели 
                в режиме реального времени. Больше никаких сомнений при выборе размера или посадки.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <Card className="p-6 text-center">
                  <Icon name="Sparkles" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">3D технологии</h3>
                  <p className="text-sm text-muted-foreground">Реалистичная визуализация одежды</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Shirt" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground">Только проверенные бренды</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Clock" size={32} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Удобство</h3>
                  <p className="text-sm text-muted-foreground">Примерка за 2 минуты</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 flex items-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">CONTACT</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Контакты</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами для получения дополнительной информации
              </p>
            </div>

            <Card className="p-8 animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@virtuoso.shop</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="icon">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Twitter" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 VIRTUOSO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;