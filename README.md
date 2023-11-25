# react-template

## 1. Descriptions

react 프로젝트에 사용하는 기본 공통 템플릿입니다.

## 2. Info

### 2-1. Build (수정 예정)

### 2-2. Styles (수정 예정)

#### 2-2-1. styled-components

#### 2-2-2. [custom].scss

### 2-3. Stores (수정 예정)

#### 2-3-1. redux

### 2-4. Plugins (수정 예정)

#### 2-4-1. editor

#### 2-4-2. date formatter

---

## 3. Folder Structure

```
📁 root/
├─ 📂 public/
│   ├─ index.html
│   └─ ...
├─ 📂 src/
│     ├─ 📁 assets/
│     ├─ 📂 components/
│     │   ├─ 📁 alert/
│     │   └─ 📂 checkbox/
│     │       ├─ index.ts
│     │       ├─ types.ts
│     │       ├─ styles.ts
│     │       ├─ Checkbox.tsx
│     │       ├─ CheckboxGroup.tsx
│     │       └─ test.js
|     |
│     ├─ 📂 pages/
|     |   ├─ 📂 HomePage
│     │   │  ├─ index.tsx
│     │   │  └─ index.styles.ts
|     |   |
│     │   └─ 📂 productPages/
│     │       ├─ 📂 types/
│     │       │   ├─ index.types.ts
│     │       │   └─ productItem.types.ts
|     |       |
│     │       └─ 📂 productListPage/
│     │           ├─ 📂 ProductItem/
│     │           │   ├─ test.js
│     │           │   ├─ index.tsx
│     │           │   └─ styles.ts
│     │           ├─ index.tsx
│     │           └─ index.styles.ts
|     |
│     ├─ 📂 api/
│     │	  ├─ 📁 types/
│     │	  ├─ index.ts
│     │	  ├─ users.ts
│     │	  └─ auth.ts
|     |
│     ├─ 📂 layouts/
│     |	  ├─ 📁 types/
│     |   ├─ header.ts
│     │	  └─ footer.ts
|     |
│     ├─ 📂 hooks/
|     |	  ├─ 📁 types/
│     |	  ├─ 📁 common/
│     |	  └─ home.ts
|     |
│     ├─ 📂 utils/
│     |   ├─ stringFormat.ts
|     |   ├─ dateFormat.ts
|     |   └─ numberFormat.ts
|     |
│     ├─ 📂 store/
│     |	  ├─ 📁 types/
│     |   ├─ index.ts
│     |	  ├─ modal.ts
│     |	  └─ users.ts
|     |
|     ├─ 📂 constants/
|     |	  ├─ home.js
|     |	  ├─ users.js
|     |	  └─ router.js
|     |
|     ├─ 📂 lib/
|     |	  ├─ 📁 google/
|     |	  ├─ 📁 naver/
|     |	  └─ 📂 calendar/
|     |	      ├─ 📁 types/
|     |	      ├─ calendar.ts
|     |	      └─ calendar.css
|     |
|     ├─ 📁 router/
|     ├─ 📁 types/
|     ├─ App.ts
|     └─ index.ts
|
└── package.json

```

### 3-1. Components Folder

#### 공통컴포넌트

```
📂 components/
 ├─ 📁 alert/
 └─ 📂 checkbox/
     ├─ index.ts
     ├─ types.ts
     ├─ styles.ts
     ├─ Checkbox.tsx
     ├─ CheckboxGroup.tsx
     └─ test.js
```

#### 페이지 내 컴포넌트

```
📂 ProductItem/
  ├─ test.js
  ├─ index.tsx
  └─ styles.ts
```

페이지 내 해당 컴포넌트에서 <br/>
UI작성하는 부분과 로직을 작성하는 부분을 따로 나눴습니다. <br/>

UI작성 하는 컴포넌트 **styles.ts** <br/>
로직을 작성하는 컴포넌트 **index.tsx** 로 나눴습니다.

### 3-2. Pages Folder

```
📂 pages/
 └─ 📂 productPages/
    ├─ 📂 types/
    │   ├─ index.types.ts
    │   └─ productItem.types.ts
    |
    └─ 📂 productListPage/
        ├─ 📂 ProductItem/
        |   ├─ test.js
        │   ├─ index.tsx
    	│	└─ styles.ts
        ├─ index.tsx
        └─ index.styles.ts

```

---

## Examples
