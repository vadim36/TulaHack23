<template>
  <div class="card-account">
      <h1 class="card-account__title">Ваш аккаунт</h1>
      <div class="card-account__profile-card profile-card">
          <img class="profile-card__image" src="https://plus.unsplash.com/premium_photo-1661274050137-edc61fa89ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <div class="profile-card__container-about container-about">
              <h2 class="container-about__title-name">Иванова Инна Ивановна</h2>
              <strong class="container-about__title-town">Город: Тула</strong>
              <p class="container-about__text-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cumque earum et incidunt ipsa. Accusamus quidem recusandae rem sequi suscipit voluptatum. Adipisci aliquam aliquid animi aperiam aut corporis culpa cum ducimus ea exercitationem fuga fugiat fugit, hic incidunt ipsa iste laudantium minus molestias non odio officiis quaerat quo rem repellat sunt tempore tenetur, ut velit voluptas voluptatibus?</p>
              <button type="button" class="container-about__button-edit btn btn-outline-primary"
                @click="editAccount()">Изменить аккаунт</button>
          </div>
      </div>
      <div class="card-account__posts-card posts-card">
          <div class="posts-card__header">
              <h2 class="posts-card__title">Ваши посты</h2>
              <router-link to="/makePost">
                  <button type="button" class="posts-card__button-add btn btn-outline-success">Создать новый пост</button>
              </router-link>
          </div>
          <div class="posts-card__container-posts">
              <NewPost/>
              <NewPost/>
              <NewPost/>
              <NewPost/>
              <NewPost/>
          </div>
      </div>
  </div>
</template>
<script>
import NewPost from "@/components/NewPost.vue";
export default {
    components: {
        NewPost
    },
    methods: {
        editAccount() {
            /*const profileImageElement = document.querySelector('.profile-card__image');
            const profileNameField = document.querySelector('.container-about__title-name');
            const profileTownField = document.querySelector('.container-about__title-town');
            const profileDescriptionField = document.querySelector('.container-about__text-description');
            const profileEditButton = document.querySelector('.container-about__button-edit');

            profileImageElement.classList.add('edit-image');
            profileImageElement.addEventListener('click', () => {
                //TODO: доделать это
            });

            const profileNameFieldValue = profileNameField.innerHTML;
            profileNameField.remove()
            const newProfileNameField = document.createElement('input');
            newProfileNameField.classList.add('form-control');
            newProfileNameField.value = profileNameFieldValue;
            profileTownField.before(newProfileNameField);

            profileTownField.remove();
            const newProfileTownField = document.createElement('select');
            newProfileTownField.classList.add('form-select');
            newProfileTownField.innerHTML = '' +
                '<option value="Москва">Москва</option>\n' +
                '                <option value="Санкт-Петербург">Санкт-Петербург</option>\n' +
                '                <option value="Пенза">Пенза</option>\n' +
                '                <option value="Абакан">Абакан</option>\n' +
                '                <option value="Азов">Азов</option>\n' +
                '                <option value="Александров">Александров</option>\n' +
                '                <option value="Алексин">Алексин</option>\n' +
                '                <option value="Альметьевск">Альметьевск</option>\n' +
                '                <option value="Анапа">Анапа</option>\n' +
                '                <option value="Ангарск">Ангарск</option>\n' +
                '                <option value="Анжеро">Анжеро-Судженск</option>\n' +
                '                <option value="Апатиты">Апатиты</option>\n' +
                '                <option value="Арзамас">Арзамас</option>\n' +
                '                <option value="Армавир">Армавир</option>\n' +
                '                <option value="Арсеньев">Арсеньев</option>\n' +
                '                <option value="Артем">Артем</option>\n' +
                '                <option value="Архангельск">Архангельск</option>\n' +
                '                <option value="Асбест">Асбест</option>\n' +
                '                <option value="Астрахань">Астрахань</option>\n' +
                '                <option value="Ачинск">Ачинск</option>\n' +
                '                <option value="Балаково">Балаково</option>\n' +
                '                <option value="Балахна">Балахна</option>\n' +
                '                <option value="Балашиха">Балашиха</option>\n' +
                '                <option value="Балашов">Балашов</option>\n' +
                '                <option value="Барнаул">Барнаул</option>\n' +
                '                <option value="Батайск">Батайск</option>\n' +
                '                <option value="Белгород">Белгород</option>\n' +
                '                <option value="Белебей">Белебей</option>\n' +
                '                <option value="Белово">Белово</option>\n' +
                '                <option value="Белогорск (Амурская область)">Белогорск (Амурская область)</option>\n' +
                '                <option value="Белорецк">Белорецк</option>\n' +
                '                <option value="Белореченск">Белореченск</option>\n' +
                '                <option value="Бердск">Бердск</option>\n' +
                '                <option value="Березники">Березники</option>\n' +
                '                <option value="Березовский (Свердловская область)">Березовский (Свердловская область)</option>\n' +
                '                <option value="Бийск">Бийск</option>\n' +
                '                <option value="Биробиджан">Биробиджан</option>\n' +
                '                <option value="Благовещенск (Амурская область)">Благовещенск (Амурская область)</option>\n' +
                '                <option value="Бор">Бор</option>\n' +
                '                <option value="Борисоглебск">Борисоглебск</option>\n' +
                '                <option value="Боровичи">Боровичи</option>\n' +
                '                <option value="Братск">Братск</option>\n' +
                '                <option value="Брянск">Брянск</option>\n' +
                '                <option value="Бугульма">Бугульма</option>\n' +
                '                <option value="Буденновск">Буденновск</option>\n' +
                '                <option value="Бузулук">Бузулук</option>\n' +
                '                <option value="Буйнакск">Буйнакск</option>\n' +
                '                <option value="Великие Луки">Великие Луки</option>\n' +
                '                <option value="Великий Новгород">Великий Новгород</option>\n' +
                '                <option value="Верхняя Пышма">Верхняя Пышма</option>\n' +
                '                <option value="Видное">Видное</option>\n' +
                '                <option value="Владивосток">Владивосток</option>\n' +
                '                <option value="Владикавказ">Владикавказ</option>\n' +
                '                <option value="Владимир">Владимир</option>\n' +
                '                <option value="Волгоград">Волгоград</option>\n' +
                '                <option value="Волгодонск">Волгодонск</option>\n' +
                '                <option value="Волжск">Волжск</option>\n' +
                '                <option value="Волжский">Волжский</option>\n' +
                '                <option value="Вологда">Вологда</option>\n' +
                '                <option value="Вольск">Вольск</option>\n' +
                '                <option value="Воркута">Воркута</option>\n' +
                '                <option value="Воронеж">Воронеж</option>\n' +
                '                <option value="Воскресенск">Воскресенск</option>\n' +
                '                <option value="Воткинск">Воткинск</option>\n' +
                '                <option value="Всеволожск">Всеволожск</option>\n' +
                '                <option value="Выборг">Выборг</option>\n' +
                '                <option value="Выкса">Выкса</option>\n' +
                '                <option value="Вязьма">Вязьма</option>\n' +
                '                <option value="Гатчина">Гатчина</option>\n' +
                '                <option value="Геленджик">Геленджик</option>\n' +
                '                <option value="Георгиевск">Георгиевск</option>\n' +
                '                <option value="Глазов">Глазов</option>\n' +
                '                <option value="Горно-Алтайск">Горно-Алтайск</option>\n' +
                '                <option value="Грозный">Грозный</option>\n' +
                '                <option value="Губкин">Губкин</option>\n' +
                '                <option value="Гудермес">Гудермес</option>\n' +
                '                <option value="Гуково">Гуково</option>\n' +
                '                <option value="Гусь-Хрустальный">Гусь-Хрустальный</option>\n' +
                '                <option value="Дербент">Дербент</option>\n' +
                '                <option value="Дзержинск">Дзержинск</option>\n' +
                '                <option value="Димитровград">Димитровград</option>\n' +
                '                <option value="Дмитров">Дмитров</option>\n' +
                '                <option value="Долгопрудный">Долгопрудный</option>\n' +
                '                <option value="Домодедово">Домодедово</option>\n' +
                '                <option value="Донской">Донской</option>\n' +
                '                <option value="Дубна">Дубна</option>\n' +
                '                <option value="Евпатория">Евпатория</option>\n' +
                '                <option value="Егорьевск">Егорьевск</option>\n' +
                '                <option value="Ейск">Ейск</option>\n' +
                '                <option value="Екатеринбург">Екатеринбург</option>\n' +
                '                <option value="Елабуга">Елабуга</option>\n' +
                '                <option value="Елец">Елец</option>\n' +
                '                <option value="Ессентуки">Ессентуки</option>\n' +
                '                <option value="Железногорск (Красноярский край)">Железногорск (Красноярский край)</option>\n' +
                '                <option value="Железногорск (Курская область)">Железногорск (Курская область)</option>\n' +
                '                <option value="Жигулевск">Жигулевск</option>\n' +
                '                <option value="Жуковский">Жуковский</option>\n' +
                '                <option value="Заречный">Заречный</option>\n' +
                '                <option value="Зеленогорск">Зеленогорск</option>\n' +
                '                <option value="Зеленодольск">Зеленодольск</option>\n' +
                '                <option value="Златоуст">Златоуст</option>\n' +
                '                <option value="Иваново">Иваново</option>\n' +
                '                <option value="Ивантеевка">Ивантеевка</option>\n' +
                '                <option value="Ижевск">Ижевск</option>\n' +
                '                <option value="Избербаш">Избербаш</option>\n' +
                '                <option value="Иркутск">Иркутск</option>\n' +
                '                <option value="Искитим">Искитим</option>\n' +
                '                <option value="Ишим">Ишим</option>\n' +
                '                <option value="Ишимбай">Ишимбай</option>\n' +
                '                <option value="Йошкар-Ола">Йошкар-Ола</option>\n' +
                '                <option value="Казань">Казань</option>\n' +
                '                <option value="Калининград">Калининград</option>\n' +
                '                <option value="Калуга">Калуга</option>\n' +
                '                <option value="Каменск-Уральский">Каменск-Уральский</option>\n' +
                '                <option value="Каменск-Шахтинский">Каменск-Шахтинский</option>\n' +
                '                <option value="Камышин">Камышин</option>\n' +
                '                <option value="Канск">Канск</option>\n' +
                '                <option value="Каспийск">Каспийск</option>\n' +
                '                <option value="Кемерово">Кемерово</option>\n' +
                '                <option value="Керчь">Керчь</option>\n' +
                '                <option value="Кинешма">Кинешма</option>\n' +
                '                <option value="Кириши">Кириши</option>\n' +
                '                <option value="Киров (Кировская область)">Киров (Кировская область)</option>\n' +
                '                <option value="Кирово-Чепецк">Кирово-Чепецк</option>\n' +
                '                <option value="Киселевск">Киселевск</option>\n' +
                '                <option value="Кисловодск">Кисловодск</option>\n' +
                '                <option value="Клин">Клин</option>\n' +
                '                <option value="Клинцы">Клинцы</option>\n' +
                '                <option value="Ковров">Ковров</option>\n' +
                '                <option value="Когалым">Когалым</option>\n' +
                '                <option value="Коломна">Коломна</option>\n' +
                '                <option value="Комсомольск-на-Амуре">Комсомольск-на-Амуре</option>\n' +
                '                <option value="Копейск">Копейск</option>\n' +
                '                <option value="Королев">Королев</option>\n' +
                '                <option value="Кострома">Кострома</option>\n' +
                '                <option value="Котлас">Котлас</option>\n' +
                '                <option value="Красногорск">Красногорск</option>\n' +
                '                <option value="Краснодар">Краснодар</option>\n' +
                '                <option value="Краснокаменск">Краснокаменск</option>\n' +
                '                <option value="Краснокамск">Краснокамск</option>\n' +
                '                <option value="Краснотурьинск">Краснотурьинск</option>\n' +
                '                <option value="Красноярск">Красноярск</option>\n' +
                '                <option value="Кропоткин">Кропоткин</option>\n' +
                '                <option value="Крымск">Крымск</option>\n' +
                '                <option value="Кстово">Кстово</option>\n' +
                '                <option value="Кузнецк">Кузнецк</option>\n' +
                '                <option value="Кумертау">Кумертау</option>\n' +
                '                <option value="Кунгур">Кунгур</option>\n' +
                '                <option value="Курган">Курган</option>\n' +
                '                <option value="Курск">Курск</option>\n' +
                '                <option value="Кызыл">Кызыл</option>\n' +
                '                <option value="Лабинск">Лабинск</option>\n' +
                '                <option value="Лениногорск">Лениногорск</option>\n' +
                '                <option value="Ленинск-Кузнецкий">Ленинск-Кузнецкий</option>\n' +
                '                <option value="Лесосибирск">Лесосибирск</option>\n' +
                '                <option value="Липецк">Липецк</option>\n' +
                '                <option value="Лиски">Лиски</option>\n' +
                '                <option value="Лобня">Лобня</option>\n' +
                '                <option value="Лысьва">Лысьва</option>\n' +
                '                <option value="Лыткарино">Лыткарино</option>\n' +
                '                <option value="Люберцы">Люберцы</option>\n' +
                '                <option value="Магадан">Магадан</option>\n' +
                '                <option value="Магнитогорск">Магнитогорск</option>\n' +
                '                <option value="Майкоп">Майкоп</option>\n' +
                '                <option value="Махачкала">Махачкала</option>\n' +
                '                <option value="Междуреченск">Междуреченск</option>\n' +
                '                <option value="Мелеуз">Мелеуз</option>\n' +
                '                <option value="Миасс">Миасс</option>\n' +
                '                <option value="Минеральные Воды">Минеральные Воды</option>\n' +
                '                <option value="Минусинск">Минусинск</option>\n' +
                '                <option value="Михайловка">Михайловка</option>\n' +
                '                <option value="Михайловск (Ставропольский край)">Михайловск (Ставропольский край)</option>\n' +
                '                <option value="Мичуринск">Мичуринск</option>\n' +
                '                <option value="Мурманск">Мурманск</option>\n' +
                '                <option value="Муром">Муром</option>\n' +
                '                <option value="Мытищи">Мытищи</option>\n' +
                '                <option value="Набережные Челны">Набережные Челны</option>\n' +
                '                <option value="Назарово">Назарово</option>\n' +
                '                <option value="Назрань">Назрань</option>\n' +
                '                <option value="Нальчик">Нальчик</option>\n' +
                '                <option value="Наро-Фоминск">Наро-Фоминск</option>\n' +
                '                <option value="Находка">Находка</option>\n' +
                '                <option value="Невинномысск">Невинномысск</option>\n' +
                '                <option value="Нерюнгри">Нерюнгри</option>\n' +
                '                <option value="Нефтекамск">Нефтекамск</option>\n' +
                '                <option value="Нефтеюганск">Нефтеюганск</option>\n' +
                '                <option value="Нижневартовск">Нижневартовск</option>\n' +
                '                <option value="Нижнекамск">Нижнекамск</option>\n' +
                '                <option value="Нижний Новгород">Нижний Новгород</option>\n' +
                '                <option value="Нижний Тагил">Нижний Тагил</option>\n' +
                '                <option value="Новоалтайск">Новоалтайск</option>\n' +
                '                <option value="Новокузнецк">Новокузнецк</option>\n' +
                '                <option value="Новокуйбышевск">Новокуйбышевск</option>\n' +
                '                <option value="Новомосковск">Новомосковск</option>\n' +
                '                <option value="Новороссийск">Новороссийск</option>\n' +
                '                <option value="Новосибирск">Новосибирск</option>\n' +
                '                <option value="Новотроицк">Новотроицк</option>\n' +
                '                <option value="Новоуральск">Новоуральск</option>\n' +
                '                <option value="Новочебоксарск">Новочебоксарск</option>\n' +
                '                <option value="Новочеркасск">Новочеркасск</option>\n' +
                '                <option value="Новошахтинск">Новошахтинск</option>\n' +
                '                <option value="Новый Уренгой">Новый Уренгой</option>\n' +
                '                <option value="Ногинск">Ногинск</option>\n' +
                '                <option value="Норильск">Норильск</option>\n' +
                '                <option value="Ноябрьск">Ноябрьск</option>\n' +
                '                <option value="Нягань">Нягань</option>\n' +
                '                <option value="Обнинск">Обнинск</option>\n' +
                '                <option value="Одинцово">Одинцово</option>\n' +
                '                <option value="Озерск (Челябинская область)">Озерск (Челябинская область)</option>\n' +
                '                <option value="Октябрьский">Октябрьский</option>\n' +
                '                <option value="Омск">Омск</option>\n' +
                '                <option value="Орел">Орел</option>\n' +
                '                <option value="Оренбург">Оренбург</option>\n' +
                '                <option value="Орехово-Зуево">Орехово-Зуево</option>\n' +
                '                <option value="Орск">Орск</option>\n' +
                '                <option value="Павлово">Павлово</option>\n' +
                '                <option value="Павловский Посад">Павловский Посад</option>\n' +
                '                <option value="Первоуральск">Первоуральск</option>\n' +
                '                <option value="Пермь">Пермь</option>\n' +
                '                <option value="Петрозаводск">Петрозаводск</option>\n' +
                '                <option value="Петропавловск-Камчатский">Петропавловск-Камчатский</option>\n' +
                '                <option value="Подольск">Подольск</option>\n' +
                '                <option value="Полевской">Полевской</option>\n' +
                '                <option value="Прокопьевск">Прокопьевск</option>\n' +
                '                <option value="Прохладный">Прохладный</option>\n' +
                '                <option value="Псков">Псков</option>\n' +
                '                <option value="Пушкино">Пушкино</option>\n' +
                '                <option value="Пятигорск">Пятигорск</option>\n' +
                '                <option value="Раменское">Раменское</option>\n' +
                '                <option value="Ревда">Ревда</option>\n' +
                '                <option value="Реутов">Реутов</option>\n' +
                '                <option value="Ржев">Ржев</option>\n' +
                '                <option value="Рославль">Рославль</option>\n' +
                '                <option value="Россошь">Россошь</option>\n' +
                '                <option value="Ростов-на-Дону">Ростов-на-Дону</option>\n' +
                '                <option value="Рубцовск">Рубцовск</option>\n' +
                '                <option value="Рыбинск">Рыбинск</option>\n' +
                '                <option value="Рязань">Рязань</option>\n' +
                '                <option value="Салават">Салават</option>\n' +
                '                <option value="Сальск">Сальск</option>\n' +
                '                <option value="Самара">Самара</option>\n' +
                '                <option value="Саранск">Саранск</option>\n' +
                '                <option value="Сарапул">Сарапул</option>\n' +
                '                <option value="Саратов">Саратов</option>\n' +
                '                <option value="Саров">Саров</option>\n' +
                '                <option value="Свободный">Свободный</option>\n' +
                '                <option value="Севастополь">Севастополь</option>\n' +
                '                <option value="Северодвинск">Северодвинск</option>\n' +
                '                <option value="Северск">Северск</option>\n' +
                '                <option value="Сергиев Посад">Сергиев Посад</option>\n' +
                '                <option value="Серов">Серов</option>\n' +
                '                <option value="Серпухов">Серпухов</option>\n' +
                '                <option value="Сертолово">Сертолово</option>\n' +
                '                <option value="Сибай">Сибай</option>\n' +
                '                <option value="Симферополь">Симферополь</option>\n' +
                '                <option value="Славянск-на-Кубани">Славянск-на-Кубани</option>\n' +
                '                <option value="Смоленск">Смоленск</option>\n' +
                '                <option value="Соликамск">Соликамск</option>\n' +
                '                <option value="Солнечногорск">Солнечногорск</option>\n' +
                '                <option value="Сосновый Бор">Сосновый Бор</option>\n' +
                '                <option value="Сочи">Сочи</option>\n' +
                '                <option value="Ставрополь">Ставрополь</option>\n' +
                '                <option value="Старый Оскол">Старый Оскол</option>\n' +
                '                <option value="Стерлитамак">Стерлитамак</option>\n' +
                '                <option value="Ступино">Ступино</option>\n' +
                '                <option value="Сургут">Сургут</option>\n' +
                '                <option value="Сызрань">Сызрань</option>\n' +
                '                <option value="Сыктывкар">Сыктывкар</option>\n' +
                '                <option value="Таганрог">Таганрог</option>\n' +
                '                <option value="Тамбов">Тамбов</option>\n' +
                '                <option value="Тверь">Тверь</option>\n' +
                '                <option value="Тимашевск">Тимашевск</option>\n' +
                '                <option value="Тимашевск">Тихвин</option>\n' +
                '                <option value="Тихорецк">Тихорецк</option>\n' +
                '                <option value="Тобольск">Тобольск</option>\n' +
                '                <option value="Тольятти">Тольятти</option>\n' +
                '                <option value="Томск">Томск</option>\n' +
                '                <option value="Троицк">Троицк</option>\n' +
                '                <option value="Туапсе">Туапсе</option>\n' +
                '                <option value="Туймазы">Туймазы</option>\n' +
                '                <option value="Тула">Тула</option>\n' +
                '                <option value="Тюмень">Тюмень</option>\n' +
                '                <option value="Узловая">Узловая</option>\n' +
                '                <option value="Улан-Удэ">Улан-Удэ</option>\n' +
                '                <option value="Ульяновск">Ульяновск</option>\n' +
                '                <option value="Урус-Мартан">Урус-Мартан</option>\n' +
                '                <option value="Усолье-Сибирское">Усолье-Сибирское</option>\n' +
                '                <option value="Уссурийск">Уссурийск</option>\n' +
                '                <option value="Усть-Илимск">Усть-Илимск</option>\n' +
                '                <option value="Уфа">Уфа</option>\n' +
                '                <option value="Ухта">Ухта</option>\n' +
                '                <option value="Феодосия">Феодосия</option>\n' +
                '                <option value="Фрязино">Фрязино</option>\n' +
                '                <option value="Хабаровск">Хабаровск</option>\n' +
                '                <option value="Ханты-Мансийск">Ханты-Мансийск</option>\n' +
                '                <option value="Хасавюрт">Хасавюрт</option>\n' +
                '                <option value="Химки">Химки</option>\n' +
                '                <option value="Чайковский">Чайковский</option>\n' +
                '                <option value="Чапаевск">Чапаевск</option>\n' +
                '                <option value="Чебоксары">Чебоксары</option>\n' +
                '                <option value="Челябинск">Челябинск</option>\n' +
                '                <option value="Черемхово">Черемхово</option>\n' +
                '                <option value="Череповец">Череповец</option>\n' +
                '                <option value="Черкесск">Черкесск</option>\n' +
                '                <option value="Черногорск">Черногорск</option>\n' +
                '                <option value="Чехов">Чехов</option>\n' +
                '                <option value="Чистополь">Чистополь</option>\n' +
                '                <option value="Чита">Чита</option>\n' +
                '                <option value="Шадринск">Шадринск</option>\n' +
                '                <option value="Шали">Шали</option>\n' +
                '                <option value="Шахты">Шахты</option>\n' +
                '                <option value="Шуя">Шуя</option>\n' +
                '                <option value="Щекино">Щекино</option>\n' +
                '                <option value="Щелково">Щелково</option>\n' +
                '                <option value="Электросталь">Электросталь</option>\n' +
                '                <option value="Элиста">Элиста</option>\n' +
                '                <option value="Энгельс">Энгельс</option>\n' +
                '                <option value="Южно-Сахалинск">Южно-Сахалинск</option>\n' +
                '                <option value="Юрга">Юрга</option>\n' +
                '                <option value="Якутск">Якутск</option>\n' +
                '                <option value="Ялта">Ялта</option>\n' +
                '                <option value="Ярославль">Ярославль</option>';
            profileDescriptionField.before(newProfileTownField);

            const profileDescriptionFieldValue = profileDescriptionField.innerHTML;
            profileDescriptionField.remove();
            const newProfileDescriptionField = document.createElement('textarea');
            newProfileDescriptionField.rows = 15;
            newProfileDescriptionField.cols = 10;
            newProfileDescriptionField.classList.add('form-control');
            newProfileDescriptionField.value = profileDescriptionFieldValue;
            profileEditButton.before(newProfileDescriptionField);

            const profileEditButtonValue = profileEditButton.innerHTML;
            profileEditButton.innerHTML = 'Сохранить изменения';
            profileEditButton.addEventListener('click', () => {
                profileEditButton.innerHTML = profileEditButtonValue;

                const newProfileDescriptionFieldValue = newProfileDescriptionField.value;
                newProfileDescriptionField.remove();
                const profileDescriptionField3 = document.createElement('p');
                profileDescriptionField3.classList.add('container-about__text-description');
                profileDescriptionField3.innerHTML = newProfileDescriptionFieldValue;
                profileEditButton.before(profileDescriptionField3);

                const newProfileTownFieldValue = newProfileTownField.value;
                newProfileTownField.remove();
                const profileTownField3 = document.createElement('strong');
                profileTownField3.classList.add('container-about__title-town');
                profileTownField3.innerHTML = `Город: ${newProfileTownFieldValue}`;
                profileDescriptionField3.before(profileTownField3);

                const newProfileNameFieldValue = newProfileNameField.value;
                newProfileNameField.remove();
                const profileNameField3 = document.createElement('h2');
                profileNameField3.classList.add('container-about__title-name');
                profileNameField3.innerHTML = newProfileNameFieldValue;
                profileTownField3.before(profileNameField3);
            }, {once: true});*/
         }
    }
}
</script>
<style>
@import "@/assets/style/views/AccountPage_view.scss";
</style>