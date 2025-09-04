import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [selectedService, setSelectedService] = useState('');

  const bikes = [
    {
      id: 1,
      name: 'Горный велосипед MT-350',
      price: '45 000 ₽',
      image: 'img/42c4d192-f803-43af-939a-c40c78718df5.jpg',
      description: 'Профессиональный горный велосипед для экстремального катания'
    },
    {
      id: 2,
      name: 'Городской велосипед City-Pro',
      price: '28 000 ₽',
      image: 'img/ff56fbe3-0cc0-4ba1-b3eb-e6d7d4d00939.jpg',
      description: 'Комфортный городской велосипед для ежедневных поездок'
    },
    {
      id: 3,
      name: 'Шоссейный велосипед RoadMax',
      price: '65 000 ₽',
      image: 'img/b9828b44-7cb7-4877-9cef-63fe103174fe.jpg',
      description: 'Скоростной шоссейный велосипед для профессиональных гонок'
    }
  ];

  const services = [
    {
      name: 'Техническое обслуживание',
      price: 'от 1 500 ₽',
      description: 'Полная диагностика и настройка велосипеда'
    },
    {
      name: 'Ремонт колес',
      price: 'от 800 ₽', 
      description: 'Восстановление спиц, замена камер и покрышек'
    },
    {
      name: 'Настройка тормозов',
      price: 'от 1 200 ₽',
      description: 'Регулировка дисковых и ободных тормозов'
    },
    {
      name: 'Замена цепи',
      price: 'от 600 ₽',
      description: 'Установка новой цепи и настройка трансмиссии'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bike-sky via-white to-bike-turquoise">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Bike" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-bike-navy">ВелоМастер</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-bike-navy hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-bike-navy hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-bike-navy hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-bike-navy hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-bike-navy mb-6 bg-gradient-to-r from-bike-navy via-primary to-bike-turquoise bg-clip-text text-transparent">
              ВелоМастер
            </h1>
            <p className="text-xl md:text-2xl text-bike-navy/80 mb-8 max-w-2xl mx-auto">
              Ваш надежный партнер в мире велосипедов. Продажа, обслуживание и ремонт с 2010 года
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover-scale">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Посмотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale">
                <Icon name="Wrench" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-bike-navy text-center mb-12">
            Каталог велосипедов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike, index) => (
              <Card key={bike.id} className={`overflow-hidden hover-scale transition-all duration-300 border-0 shadow-lg animate-fade-in bg-white/80 backdrop-blur-sm`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-bike-navy">{bike.name}</CardTitle>
                  <p className="text-bike-navy/70 text-sm">{bike.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{bike.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-bike-navy text-center mb-12">
            Услуги сервиса
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className={`text-center hover-scale cursor-pointer transition-all duration-300 border-0 shadow-lg animate-fade-in bg-white/80 backdrop-blur-sm`} 
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => setSelectedService(service.name)}>
                <CardHeader>
                  <Icon name="Settings" size={32} className="mx-auto text-primary mb-2" />
                  <CardTitle className="text-bike-navy text-lg">{service.name}</CardTitle>
                  <p className="text-primary font-bold text-xl">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-bike-navy/70 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-bike-navy text-2xl">
                <Icon name="Calendar" size={24} className="inline mr-2" />
                Онлайн запись на обслуживание
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-bike-navy">Ваше имя</Label>
                  <Input id="name" placeholder="Введите имя" className="border-primary/30 focus:border-primary" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-bike-navy">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" className="border-primary/30 focus:border-primary" />
                </div>
              </div>
              <div>
                <Label htmlFor="service" className="text-bike-navy">Услуга</Label>
                <Input 
                  id="service" 
                  value={selectedService} 
                  onChange={(e) => setSelectedService(e.target.value)}
                  placeholder="Выберите услугу" 
                  className="border-primary/30 focus:border-primary" 
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-bike-navy">Комментарий</Label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите проблему или особые пожелания"
                  className="border-primary/30 focus:border-primary"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-bike-navy mb-8">О нашем магазине</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-left">
                  <h3 className="text-2xl font-bold text-bike-navy">История ВелоМастер</h3>
                  <p className="text-bike-navy/80">
                    С 2010 года мы помогаем людям находить идеальные велосипеды и поддерживать их в отличном состоянии. 
                    Наша команда состоит из опытных механиков и консультантов, которые разделяют страсть к велоспорту.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={20} className="text-primary" />
                      <span className="text-bike-navy">Более 14 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={20} className="text-primary" />
                      <span className="text-bike-navy">5000+ довольных клиентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={20} className="text-primary" />
                      <span className="text-bike-navy">Гарантия на все работы</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary to-bike-turquoise rounded-xl p-8 text-white">
                  <Icon name="Award" size={48} className="mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Наша миссия</h4>
                  <p>Сделать велоспорт доступным каждому, предоставляя качественные велосипеды и профессиональное обслуживание</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-bike-navy text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-bike-navy text-xl">Как нас найти</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-bike-navy">Адрес</p>
                    <p className="text-bike-navy/70">г. Москва, ул. Велосипедная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-bike-navy">Телефон</p>
                    <p className="text-bike-navy/70">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-bike-navy">Режим работы</p>
                    <p className="text-bike-navy/70">Пн-Пт: 10:00-20:00<br />Сб-Вс: 10:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-bike-navy">Email</p>
                    <p className="text-bike-navy/70">info@velomaster.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-bike-turquoise text-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                <Input placeholder="Телефон" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                <Textarea placeholder="Ваш вопрос" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bike-navy text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Bike" size={24} className="text-primary" />
              <span className="text-xl font-bold">ВелоМастер</span>
            </div>
            <p className="text-white/70 text-center md:text-right">
              © 2024 ВелоМастер. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;