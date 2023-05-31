# 🪐 Star Wars Application
## 🐶 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

```bash
# Not used
npm run eject            # remove the single build dependency
npm run deploy-storybook # storybook deploy
```


## 🦄 API
- https://swapi.dev (основное API)


### React.js
- Разворачивание приложения с `create-react-app`
- Состояние компонента (хук `useState`)
- Жизненный цикл компонента (хук `useEffect`)
- Context API (хук `useContext`)
- Рефы и DOM (хук `useRef`)
- Мемоизация (хук `useCallback`)
- Создание собственных хуков
- Фрагменты
- Паттерн `Higher-Order Component`
- Паттерн `Подъём состояния`
- Обработка событий
- Controlled Components
- Подключение CSS, `css-modules`, библиотека `classnames`
- Списки и ключи, `Reconciliation Algorithm`
- Отложенная загрузка компонентов `React.lazy()`
- Библиотека `prop-types` для валидации props

### React Router
- Базовый роутинг
- URL Parameters
- Query Parameters
- Обработка страницы 404 (Not Found)
- Хуки `useLocation` и `useHistory`

### Redux
- Базовая структура react-redux-приложения
- Хуки `useDispatch`, `useSelector`
- Redux Middleware
- Создание асинхронных action с библиотекой `redux-thunk`
- Отслеживание состояния store с `redux-devtools-extension`
---

## 🐣 Порядок импортов
- Библиотеки
- Контекст
- HOC
- UI-компоненты
- Компоненты
- Изображения
- Хуки
- Роуты
- Сервисы
- Утилиты
- Константы
- Стили

---

#### Технологии
- `TypeScript`
- `Firebase` регистрация  
- `Material UI`, стилизация через css-in-js
- `Redux Thunk`
- `React Hook Form` для обработки данных форм

#### Функционал
- Перегруппировка компонентов Header при адаптиве
- Роутер. Анимация при переходе между страницами
- Добавить шрифты
- Публикация NPM-пакета для UiKit
- .bat-файлы для запуска скриптов

