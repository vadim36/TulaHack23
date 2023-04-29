<template>
    <div class="wrapper-makingPost">
        <header class="header">
            <router-link to="/personalAccount">
                <button type="button" class="button-reverse btn btn-secondary">Обратно</button>
            </router-link>
            <h1 class="title">Создание нового поста</h1>
        </header>
        <form action="#" name="makingNewPost" class="card-newPost">
            <label for="makingTitle" class="card-newPost__label-name">
                Введите название вашего поста:
                <input type="text" v-model="name" name="makingTitle" placeholder="Название для поста..."
                       class="card-newPost__field-name form-control">
            </label>
            <label for="takeFile" class="card-newPost__label-file">
                Приложите ваши фотографии/видеоролики
                <input type="file" name="takeFile" class="card-newPost__field-file">
            </label>
            <label for="makingDescription" class="card-newPost__label-description">
                Напишите описание(опционально):
                <textarea v-model="description" cols="10" rows="8" name="makingDescription"
                          class="form-control card-newPost__field-description"></textarea>
            </label>
            <input type="submit" name="submitButton" class="card-newPost__submit-button btn btn-primary"
                v-on:click.prevent="sendMessage">
        </form>
    </div>
</template>
<script>
import BadWords from 'bad-words';

export default {
    data() {
        return {
            name: '',
            description: ''
        }
    },
    methods: {
        sendMessage() {
            const form = document.querySelector('.card-newPost');

            /*console.log(this.description.toUpperCase())

            if(this.description.toUpperCase().includes('А НУ ТЕБЯ В ПИЗДУ') || this.desciption.toUpperCase().includes('А НУ ТЕБЯ К ЕБАНОЙ МАТЕРИ')
                || this.desciption.toUpperCase().includes(
                'А НУ ТЕБЯ НА ХУЙ') || this.desciption.toUpperCase().includes(
                'А ХУ НЕ ХО') || this.desciption.toUpperCase().includes(
                'А ХУЙ ЕГО ЗНАЕТ') || this.desciption.toUpperCase().includes(
                'А ХУХУ НЕ ХОХО') || this.desciption.toUpperCase().includes(
                'АБОРТ') || this.desciption.toUpperCase().includes(
                'АБОРТАЖ') || this.desciption.toUpperCase().includes(
                'АБОРТИРОВАТЬ') || this.desciption.toUpperCase().includes(
                'АБОРТМАХЕР') || this.desciption.toUpperCase().includes(
                'БАБА С ЯЙЦАМИ') || this.desciption.toUpperCase().includes(
                'БАБУШКА: К ЕБАНОЙ БАБУШКЕ') || this.desciption.toUpperCase().includes(
                'БАБЬЯ РАДОСТЬ') || this.desciption.toUpperCase().includes(
                'БАБЬЯ СОВЕСТЬ') || this.desciption.toUpperCase().includes(
                'БАЛАЛАЙКА') || this.desciption.toUpperCase().includes(
                'БАЛДА') || this.desciption.toUpperCase().includes(
                'БАЛУН') || this.desciption.toUpperCase().includes(
                'БАНАН') || this.desciption.toUpperCase().includes(
                'БАННАЯ ДЕВКА, ОДАЛИСКА') || this.desciption.toUpperCase().includes(
                'БАРАБАННАЯ ПАЛОЧКА') || this.desciption.toUpperCase().includes(
                'Война') || this.desciption.toUpperCase().includes(
                'В ГОВНЕ КОВЫРЯТЬСЯ') || this.desciption.toUpperCase().includes(
                'В ГОВНЕ ПО ГОРЛО') || this.desciption.toUpperCase().includes(
                'В ДЕРЬМЕ КОВЫРЯТЬСЯ') || this.desciption.toUpperCase().includes(
                'В ДУШУ БОГА МАТЬ') || this.desciption.toUpperCase().includes(
                'В ЕБАНУЮПЕРЕЕБАНУЮ') || this.desciption.toUpperCase().includes(
                'В ЖОПЕ ГЛУБОКО') || this.desciption.toUpperCase().includes(
                'В ЖОПУ ЛОБЗАТЬ') || this.desciption.toUpperCase().includes(
                'В ЗАДНИЙ ПРОХОД ЛЕЗТЬ') || this.desciption.toUpperCase().includes(
                'В МАНДЕ') || this.desciption.toUpperCase().includes(
                'В МАНДУ') || this.desciption.toUpperCase().includes(
                'ГАЛОША') || this.desciption.toUpperCase().includes(
                'ГАШЕТКА') || this.desciption.toUpperCase().includes(
                'ГДЕ БЫЛА СОВЕСТЬ, ТАМ ВОЛОС ВЫРОС') || this.desciption.toUpperCase().includes(
                'ГЕНЕРАЛ') || this.desciption.toUpperCase().includes(
                'ГЕНЕРАТОР') || this.desciption.toUpperCase().includes(
                'ГИТАРА') || this.desciption.toUpperCase().includes(
                'ГЛАЗ НА ЖОПУ НАТЯНУТЬ') || this.desciption.toUpperCase().includes(
                'ГЛИНОМЕС') || this.desciption.toUpperCase().includes(
                'ГЛОТАТЬ') || this.desciption.toUpperCase().includes(
                'ГЛОТАТЬ ЖИВЧИКОВ') || this.desciption.toUpperCase().includes(
                'ДАВАЛКА') || this.desciption.toUpperCase().includes(
                'ДАВАЛКА ЧЕСТНАЯ') || this.desciption.toUpperCase().includes(
                'ДАВАТЬ') || this.desciption.toUpperCase().includes(
                'ДАВАХА') || this.desciption.toUpperCase().includes(
                'ДАМА') || this.desciption.toUpperCase().includes(
                'ДАТЬ') || this.desciption.toUpperCase().includes(
                'ДАТЬ В РОТ') || this.desciption.toUpperCase().includes(
                'ДАТЬ ПИЗДЫ') || this.desciption.toUpperCase().includes(
                'ДАТЬ ПИНКА ПОД ЗАД') || this.desciption.toUpperCase().includes(
                'ДВА ПАЛЬЦА ОБОССАТЬ') || this.desciption.toUpperCase().includes(
                'ЕБ ВАШУ МАТЬ') || this.desciption.toUpperCase().includes(
                'ЕБ ВАШУ МАТЬ') || this.desciption.toUpperCase().includes(
                'ЕБ ЕЕ МАТЬ') || this.desciption.toUpperCase().includes(
                'ЕБ ТВОЮ МАТЬ') || this.desciption.toUpperCase().includes(
                'ЕБАКА') || this.desciption.toUpperCase().includes(
                'ЕБАЛО') || this.desciption.toUpperCase().includes(
                'ЕБАЛЬНИК') || this.desciption.toUpperCase().includes(
                'ЕБАЛЬНЫЕ ГОДА') || this.desciption.toUpperCase().includes(
                'ЕБАЛЬНЫЙ СТАНОК') || this.desciption.toUpperCase().includes(
                'ЕБАНАТИК') || this.desciption.toUpperCase().includes(
                'ЖАРИТЬ') || this.desciption.toUpperCase().includes(
                'ЖАРИТЬ РАКОМ, РАЧКОМ') || this.desciption.toUpperCase().includes(
                'ЖАРИТЬСЯ') || this.desciption.toUpperCase().includes(
                'ЖЕНА') || this.desciption.toUpperCase().includes(
                'ЖЕНСКИЙ ЭЛИКСИР') || this.desciption.toUpperCase().includes(
                'ЖЕРЛО') || this.desciption.toUpperCase().includes(
                'ЖИВОГЛОТКА') || this.desciption.toUpperCase().includes(
                'ЖИВОТ НА ЖИВОТ ВСЕ ЗАЖИВЕТ') || this.desciption.toUpperCase().includes(
                'ЖИВЧИК') || this.desciption.toUpperCase().includes(
                'ЖИЗНЬ БЕКОВА НАС ЕБУТ, А НАМ НЕКОГО') || this.desciption.toUpperCase().includes(
                'ЗАБАБАХА') || this.desciption.toUpperCase().includes(
                'ЗАБЗДЕТЬ') || this.desciption.toUpperCase().includes(
                'ЗАБИТЬ ПУЛЮ') || this.desciption.toUpperCase().includes(
                'ЗАБИТЬ ШАЙБУ') || this.desciption.toUpperCase().includes(
                'ЗАБИЯКА') || this.desciption.toUpperCase().includes(
                'ЗАБЛЯДОВАТЬ') || this.desciption.toUpperCase().includes(
                'ЗАБЛЯДОВАТЬСЯ') || this.desciption.toUpperCase().includes(
                'ЗАБОРИСТЫЙ MAT С ЗАВИТУШКАМИ') || this.desciption.toUpperCase().includes(
                'ЗАБОРНАЯ БРАНЬ') || this.desciption.toUpperCase().includes(
                'ЗАВАЛИТЬ') || this.desciption.toUpperCase().includes(
                'И В РОТ, И В СРАКУ') || this.desciption.toUpperCase().includes(
                'И ЗДЕСЬ, И ТАМ, И В РОТТЕРДАМ ЧЕРЕЗ ПОПЕНГАГЕН') || this.desciption.toUpperCase().includes(
                'ИГРА НА ГИТАРЕ') || this.desciption.toUpperCase().includes(
                'ИГРА НА ОЧКО') || this.desciption.toUpperCase().includes(
                'ИГРА НА ФЛЕЙТЕ') || this.desciption.toUpperCase().includes(
                'ИГРАТЬ В КАРМАННЫЙ БИЛЬЯРД') || this.desciption.toUpperCase().includes(
                'ИГРАТЬ С ДУНЬКОЙ КУЛАКОВОЙ') || this.desciption.toUpperCase().includes(
                'ИГРУШКА') || this.desciption.toUpperCase().includes(
                'ИДИ В ЖОПУ; В ЗАД; В ЗАДНИЦУ') || this.desciption.toUpperCase().includes(
                'ИДИ В ЗАДНИЦУ') || this.desciption.toUpperCase().includes(
                'К ЕБАНОЙ МАТЕРИ') || this.desciption.toUpperCase().includes(
                'К ЕБЕНЕ МАТЕРИ') || this.desciption.toUpperCase().includes(
                'К ЕБЕНОЙ МАТЕРИ') || this.desciption.toUpperCase().includes(
                'К ЕДРЕНЕФЕНЕ') || this.desciption.toUpperCase().includes(
                'К ЕДРЕНОЙ БАБУШКЕ') || this.desciption.toUpperCase().includes(
                'К ЕДРЕНОЙ МАТЕРИ') || this.desciption.toUpperCase().includes(
                'КАБАН') || this.desciption.toUpperCase().includes(
                'КАБАЦКАЯ БЛЯДЬ') || this.desciption.toUpperCase().includes(
                'КАЖДАЯ БЛЯДЬ СВОЮ ПИЗДУ ХВАЛИТ') || this.desciption.toUpperCase().includes(
                'КАК ЕБАТЬСЯ ТАК СМЕЯТЬСЯ, КАК РОЖАТЬ ТАК ПЛАКАТЬ') || this.desciption.toUpperCase().includes(
                'ЛАГЕРНАЯ СУЧКА') || this.desciption.toUpperCase().includes(
                'ЛАДУШКА') || this.desciption.toUpperCase().includes(
                'ЛАПАТЬ') || this.desciption.toUpperCase().includes(
                'ЛАУРЕАТ ПРЕМИЙ') || this.desciption.toUpperCase().includes(
                'ЛАХУДРА') || this.desciption.toUpperCase().includes(
                'ЛЕЖАТЬ') || this.desciption.toUpperCase().includes(
                'ЛЕСБИЯНКА') || this.desciption.toUpperCase().includes(
                'ЛЕСБИЯНСТВО') || this.desciption.toUpperCase().includes(
                'ЛЕТКАЕНКА') || this.desciption.toUpperCase().includes(
                'ЛЕФ') || this.desciption.toUpperCase().includes(
                'МАГДАЛИНА') || this.desciption.toUpperCase().includes(
                'МАДАМ СИЖУ') || this.desciption.toUpperCase().includes(
                'МАЙОНЕЗ') || this.desciption.toUpperCase().includes(
                'МАЛАЯ НУЖДА') || this.desciption.toUpperCase().includes(
                'МАЛОФЕЙКА') || this.desciption.toUpperCase().includes(
                'МАЛОФЬЯ') || this.desciption.toUpperCase().includes(
                'МАЛЫШ') || this.desciption.toUpperCase().includes(
                'МАНДА') || this.desciption.toUpperCase().includes(
                'МАНДА: В МАНДУ') || this.desciption.toUpperCase().includes(
                'МАНДАВОХА') || this.desciption.toUpperCase().includes(
                'НА БЕСПТИЧЬЕ И ЖОПА СОЛОВЕЙ') || this.desciption.toUpperCase().includes(
                'НА ГОВНЕ СМЕТАНУ СОБИРАТЬ') || this.desciption.toUpperCase().includes(
                'НА КАРАЧКАХ') || this.desciption.toUpperCase().includes(
                'НА ПЕРЕДОК СЛАБА') || this.desciption.toUpperCase().includes(
                'НА ПОЛШЕСТОГО') || this.desciption.toUpperCase().includes(
                'НА ХИТРУЮ ЖОПУ ЕСТЬ ХУЙ С ВИНТОМ') || this.desciption.toUpperCase().includes(
                'НА ХУЙ СЕСТЬ') || this.desciption.toUpperCase().includes(
                'НА ХУЯ') || this.desciption.toUpperCase().includes(
                'НАБАЛДАШНИК') || this.desciption.toUpperCase().includes(
                'НАБЗДЕТЬ') || this.desciption.toUpperCase().includes(
                'ОБАБИТЬ') || this.desciption.toUpperCase().includes(
                'ОБАНА, ОБАНА ВСЯ ДЕРЕВНЯ ЕБАНА') || this.desciption.toUpperCase().includes(
                'ОБДЕЛАТЬ') || this.desciption.toUpperCase().includes(
                'ОБДРИСТАННЫЙ') || this.desciption.toUpperCase().includes(
                'ОБДРИСТАТЬ') || this.desciption.toUpperCase().includes(
                'ОБДРОЧИТЬСЯ') || this.desciption.toUpperCase().includes(
                'ОБЕРБЛЯДЬ') || this.desciption.toUpperCase().includes(
                'ОБИЖЕНКА') || this.desciption.toUpperCase().includes(
                'ОБКЛАДЫВАТЬ В ДЕСЯТЬ МАТОВ') || this.desciption.toUpperCase().includes(
                'ОБЛАДАНИЕ') || this.desciption.toUpperCase().includes(
                'ПАГАНИНИ') || this.desciption.toUpperCase().includes(
                'ПАДАЛЕЦ') || this.desciption.toUpperCase().includes(
                'ПАДЕБУРЕ') || this.desciption.toUpperCase().includes(
                'ПАДЕДЕ') || this.desciption.toUpperCase().includes(
                'ПАДЕКАТР') || this.desciption.toUpperCase().includes(
                'ПАДЕТРУА') || this.desciption.toUpperCase().includes(
                'ПАДЛА') || this.desciption.toUpperCase().includes(
                'ПАДЛЮКА') || this.desciption.toUpperCase().includes(
                'ПАЗЕЛЬ') || this.desciption.toUpperCase().includes(
                'ПАЛЕЦ ДВАДЦАТЬ ПЕРВЫЙ') || this.desciption.toUpperCase().includes(
                'РАЗБАЗАРИВАТЬ СЕБЯ') || this.desciption.toUpperCase().includes(
                'РАЗБАЗАРИВАТЬСЯ') || this.desciption.toUpperCase().includes(
                'РАЗБЛЯДОВАТЬСЯ') || this.desciption.toUpperCase().includes(
                'РАЗБУДИТЬ') || this.desciption.toUpperCase().includes(
                'РАЗВАЛИТЬ') || this.desciption.toUpperCase().includes(
                'РАЗВРАТ') || this.desciption.toUpperCase().includes(
                'РАЗВРАТНИК') || this.desciption.toUpperCase().includes(
                'РАЗВЫЕБЫВАТЬСЯ') || this.desciption.toUpperCase().includes(
                'РАЗДАЙСЯ, ОКЕАН, ГОВНО ПЛЫВЕТ') || this.desciption.toUpperCase().includes(
                'РАЗДРОЧИТЬ') || this.desciption.toUpperCase().includes(
                'С НИМ ХОРОШО ГОВНО ЕСТЬ') || this.desciption.toUpperCase().includes(
                'С ПЕРЕПИЗДИНКОЙ') || this.desciption.toUpperCase().includes(
                'С ПРИЕБОМ') || this.desciption.toUpperCase().includes(
                'С ПРИПИЗДИНКОЙ, С ПРИПИЗДЬЮ') || this.desciption.toUpperCase().includes(
                'С РАКА') || this.desciption.toUpperCase().includes(
                'С ХУЕВУ ДУШУ') || this.desciption.toUpperCase().includes(
                'С ХУЕВУ ТУЧУ') || this.desciption.toUpperCase().includes(
                'С ЯЙЦАМИ') || this.desciption.toUpperCase().includes(
                'САЖАТЬ НА ХУЙ') || this.desciption.toUpperCase().includes(
                'САМ СЕБЯ ЕБЕТ') || this.desciption.toUpperCase().includes(
                'ТВАРЬ') || this.desciption.toUpperCase().includes(
                'ТВОЮ ДУШУ ТАК') || this.desciption.toUpperCase().includes(
                'ТВОЮ ТАК') || this.desciption.toUpperCase().includes(
                'ТЕБЯ НЕ ЕБУТ НЕ ПОДМАХИВАЙ') || this.desciption.toUpperCase().includes(
                'ТЕЛЕВИЗОР') || this.desciption.toUpperCase().includes(
                'ТЕЛКА') || this.desciption.toUpperCase().includes(
                'ТЕМНО, КАК У НЕГРА В ЖОПЕ') || this.desciption.toUpperCase().includes(
                'ТЕПЛОЕ МОЛОЧКО') || this.desciption.toUpperCase().includes(
                'ТЕПЛЫЙ БРАТ') || this.desciption.toUpperCase().includes(
                'ТЕРЕТЬ') || this.desciption.toUpperCase().includes(
                'У БЛЯДИ ВСЕ МОЗГИ СЗАДИ') || this.desciption.toUpperCase().includes(
                'У МЕНЯ НА НЕЕ СТОИТ') || this.desciption.toUpperCase().includes(
                'УБИВЕЦ') || this.desciption.toUpperCase().includes(
                'УБЛЮДОК') || this.desciption.toUpperCase().includes(
                'УД') || this.desciption.toUpperCase().includes(
                'УДАРИТЬ В ТУЗА') || this.desciption.toUpperCase().includes(
                'УДАРИТЬ ПО РУБЦУ') || this.desciption.toUpperCase().includes(
                'УДЕЛАТЬ') || this.desciption.toUpperCase().includes(
                'УДОВЛЕТВОРЕННАЯ') || this.desciption.toUpperCase().includes(
                'УДОВЛЕТВОРЯТЬ') || this.desciption.toUpperCase().includes(
                'ФАБАТЬ') || this.desciption.toUpperCase().includes(
                'ФАКАТЬ') || this.desciption.toUpperCase().includes(
                'ФАКТ') || this.desciption.toUpperCase().includes(
                'ФАКТУРА') || this.desciption.toUpperCase().includes(
                'ФАЛЛОС') || this.desciption.toUpperCase().includes(
                'ФАРЬЯ') || this.desciption.toUpperCase().includes(
                'ФАЧИТЬ') || this.desciption.toUpperCase().includes(
                'ФАЧИТЬСЯ') || this.desciption.toUpperCase().includes(
                'ФЕКАЛ') || this.desciption.toUpperCase().includes(
                'ФЕКАЛИЙ') || this.desciption.toUpperCase().includes(
                'ХАВЫРКА') || this.desciption.toUpperCase().includes(
                'ХАМ') || this.desciption.toUpperCase().includes(
                'ХАМЛЕШКА') || this.desciption.toUpperCase().includes(
                'ХАРЕВО') || this.desciption.toUpperCase().includes(
                'ХАРЕКРИШНИЧАТЬ') || this.desciption.toUpperCase().includes(
                'ХАРИТЬ') || this.desciption.toUpperCase().includes(
                'ХАРИТЬ В ТУЗА') || this.desciption.toUpperCase().includes(
                'ХАРИТЬСЯ') || this.desciption.toUpperCase().includes(
                'ХАРИУС, ХАРКА') || this.desciption.toUpperCase().includes(
                'ХАРЧО') || this.desciption.toUpperCase().includes(
                'ЦЕЛАЯ') || this.desciption.toUpperCase().includes(
                'ЦЕЛИНА') || this.desciption.toUpperCase().includes(
                'ЦЕЛКА') || this.desciption.toUpperCase().includes(
                'ЦЕЛКУ ЛОМАТЬ') || this.desciption.toUpperCase().includes(
                'ЦЕЛКУ ПРОЛОМИТЬ') || this.desciption.toUpperCase().includes(
                'ЦЕЛКУ СЛОМАТЬ') || this.desciption.toUpperCase().includes(
                'ЦЕЛОВАТЬ В ЖОПУ') || this.desciption.toUpperCase().includes(
                'ЦЕЛОВАТЬ В ЗАДНИЦУ') || this.desciption.toUpperCase().includes(
                'ЦЕЛОЧКА') || this.desciption.toUpperCase().includes(
                'ЦЕЛОЧНИК') || this.desciption.toUpperCase().includes(
                'ЧЕБУРАШКА') || this.desciption.toUpperCase().includes(
                'ЧЕГО КРИЧИШЬ, КОСАЯ СРАКА') || this.desciption.toUpperCase().includes(
                'ЧЕРВЬ') || this.desciption.toUpperCase().includes(
                'ЧЕРЕЗ ЖОПУ') || this.desciption.toUpperCase().includes(
                'ЧЕРЕЗ ЗАДНИЙ ПРОХОД') || this.desciption.toUpperCase().includes(
                'ЧЕРЕЗ СРАКУ') || this.desciption.toUpperCase().includes(
                'ЧЕРНАЯ ДЫРКА') || this.desciption.toUpperCase().includes(
                'ЧЕРНОЖОПЫЕ') || this.desciption.toUpperCase().includes(
                'ЧЕРНОЗАДЫЙ') || this.desciption.toUpperCase().includes(
                'ЧЕРНЫЙ МЕСЯЦ') || this.desciption.toUpperCase().includes(
                'ШАЛАВА') || this.desciption.toUpperCase().includes(
                'ШАЛАШОВКА') || this.desciption.toUpperCase().includes(
                'ШАМПУР') || this.desciption.toUpperCase().includes(
                'ШАНКР') || this.desciption.toUpperCase().includes(
                'ШАХНА') || this.desciption.toUpperCase().includes(
                'ШАШЛЫК') || this.desciption.toUpperCase().includes(
                'ШВАБА') || this.desciption.toUpperCase().includes(
                'ШВАРКНУТЬ НА РАСТЯЖКУ') || this.desciption.toUpperCase().includes(
                'ШВЕДСКАЯ МОДЕЛЬ') || this.desciption.toUpperCase().includes(
                'ШВОРИН ТУПИК') || this.desciption.toUpperCase().includes(
                'ЩЕКОТИЛЬНИК') || this.desciption.toUpperCase().includes(
                'ЩЕКОТУН') || this.desciption.toUpperCase().includes(
                'ЩЕЛКА') || this.desciption.toUpperCase().includes(
                'ЩЕЛЬ') || this.desciption.toUpperCase().includes(
                'ЩУП') || this.desciption.toUpperCase().includes(
                'ЩУПАТЬ') || this.desciption.toUpperCase().includes(
                'ЩУПАТЬ ОЧКО') || this.desciption.toUpperCase().includes(
                'ЭДЕЛЬВЕЙС') || this.desciption.toUpperCase().includes(
                'ЭКЛЕР') || this.desciption.toUpperCase().includes(
                'ЭКСКРЕМЕНТ') || this.desciption.toUpperCase().includes(
                'ЭМАЛЬ') || this.desciption.toUpperCase().includes(
                'ЭРЕКЦИЯ') || this.desciption.toUpperCase().includes(
                'ЭРОГЕННАЯ ЗОНА') || this.desciption.toUpperCase().includes(
                'ЭРОС') || this.desciption.toUpperCase().includes(
                'ЭРОТИЗМ') || this.desciption.toUpperCase().includes(
                'ЭРОТОМАНИЯ') || this.desciption.toUpperCase().includes(
                'ЭСЭС') || this.desciption.toUpperCase().includes(
                'ЮБКА: ЛЕЗТЬ ПОД ЮБКУ') || this.desciption.toUpperCase().includes(
                'ЮБОЧНИК') || this.desciption.toUpperCase().includes(
                'ЮЛДА, ЮЛДАК') || this.desciption.toUpperCase().includes(
                'Я ЕМУ ПРО ЛЕПЕШКИ, А ОН: «НЕ ПОЕБЕШЬ ЛИ?»') || this.desciption.toUpperCase().includes(
                'ЯДРЕНА МАТЬ') || this.desciption.toUpperCase().includes(
                'ЯДРЕНА МЫШЬ') || this.desciption.toUpperCase().includes(
                'ЯДРЕНА ПАЛКА') || this.desciption.toUpperCase().includes(
                'ЯДРЕНЕ ФЕНЕ') || this.desciption.toUpperCase().includes(
                'ЯДРЕНЫ ЛАПТИ') || this.desciption.toUpperCase().includes(
                'ЯДРИ ЕГО В КАЧАЛКУ') || this.desciption.toUpperCase().includes(
                'ЯДРИ ЕЕ МАТЬ') || this.desciption.toUpperCase().includes(
                'ЯЗВИ') || this.desciption.toUpperCase().includes(
                'ЯЗВИ ЕГО')) {
                console.log(true)
                console.log('Сообщение содержит недопустимую лексику')*/
            //}
        }
    }
}
</script>
<style>
@import "@/assets/style/views/MakePostPage_view.scss";
</style>