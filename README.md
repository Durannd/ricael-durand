# Portfólio - Ricael Durand

Portfólio pessoal em React + Vite com estética "dark + neon", foco em backend engineering e storytelling técnico.

## Visão geral

Este projeto apresenta:

- Introdução pessoal com animações e efeito de digitação.
- Seções de stack, projetos, estudo de caso, experiência e certificações.
- Layout responsivo com Tailwind CSS.
- Animações com Framer Motion.
- Base de componentes UI via shadcn/ui (Radix + Tailwind).

## Stack principal

- `React 18` + `TypeScript`
- `Vite 5`
- `Tailwind CSS` + `tailwindcss-animate`
- `Framer Motion`
- `React Router DOM`
- `@tanstack/react-query` (infra já preparada)
- `Vitest` + `Testing Library`
- `ESLint`

## Scripts

Os scripts disponíveis em `package.json`:

- `npm run dev` - inicia ambiente local (Vite)
- `npm run build` - build de produção
- `npm run build:dev` - build com modo development
- `npm run preview` - preview local do build
- `npm run lint` - análise estática com ESLint
- `npm run test` - executa testes em modo run (Vitest)
- `npm run test:watch` - executa testes em watch mode

## Como rodar localmente

Pré-requisitos:

- `Node.js` 18+ (recomendado LTS)
- `npm`

Instalação e execução:

```powershell
npm install
npm run dev
```

Build e preview:

```powershell
npm run build
npm run preview
```

Lint e testes:

```powershell
npm run lint
npm run test
```

## Estrutura de pastas (resumo)

```text
src/
  App.tsx                  # Providers globais + rotas
  main.tsx                 # Entry point
  pages/
	Index.tsx              # Composição da landing page
	NotFound.tsx           # Fallback 404
  components/
	HeroSection.tsx
	AboutSection.tsx
	StackSection.tsx
	ProjectsSection.tsx
	CaseStudySection.tsx
	ExperienceSection.tsx
	CertificationsSection.tsx
	ContactSection.tsx
	ScrollProgress.tsx
	ui/                    # Componentes base shadcn/ui
  hooks/
	use-mobile.tsx
	use-toast.ts
  lib/
	utils.ts               # helper cn(...)
  test/
	example.test.ts
	setup.ts
```

## Arquitetura e fluxo

### 1) Entrada e composição

- `src/main.tsx` monta a aplicação com `createRoot`.
- `src/App.tsx` configura:
  - `QueryClientProvider`
  - `TooltipProvider`
  - toasters (`sonner` + `toaster`)
  - rotas com `BrowserRouter`

### 2) Rotas

- `/` -> `src/pages/Index.tsx`
- `*` -> `src/pages/NotFound.tsx`

### 3) Página principal

`src/pages/Index.tsx` renderiza, em ordem:

1. `ScrollProgress`
2. `HeroSection`
3. `AboutSection`
4. `StackSection`
5. `ProjectsSection`
6. `CaseStudySection`
7. `ExperienceSection`
8. `CertificationsSection`
9. `ContactSection`

## Seções customizadas (documentação funcional)

### `HeroSection`

- Header com identidade profissional.
- Efeito typewriter (`TypeWriter`) para texto dinâmico.
- Fundo com partículas e grid em parallax reativo ao mouse.
- Bloco de foto/perfil com efeitos de hover.

### `AboutSection`

- Texto de posicionamento técnico/profissional.
- Entrada animada com `useInView`.
- Linhas animadas para separação visual.

### `StackSection`

- Categorias de stack (`Backend`, `Arquitetura`, `Database`, `DevOps/QA`, `Frontend`).
- Badges com animação em hover e entrada em viewport.

### `ProjectsSection`

- Lista de projetos com:
  - stack técnica
  - principais features
  - aprendizados em accordion
  - link para repositório

### `CaseStudySection`

- Estudo de caso da migração `HTTP -> WebSocket`.
- Cards em formato de fases com accordion animado.
- Destaque de tags técnicas (`Node.js`, `Socket.io`, `JWT`, `AsyncAPI`, `WebSockets`).

### `ExperienceSection`

- Timeline de experiência profissional/mentoria.
- Resultados destacados quando disponíveis.

### `CertificationsSection`

- Lista de certificações e formação.
- Itens animados com foco em legibilidade.

### `ContactSection`

- Links externos de contato (LinkedIn, GitHub, email).
- CTA para abertura de email via `mailto:`.

## Sistema visual e tema

### Tailwind + tokens CSS

- Arquivo: `src/index.css`
- Tokens via CSS variables (`--background`, `--foreground`, `--neon`, etc.).
- Utilitários customizados como:
  - `.text-neon`
  - `.bg-surface`
  - `.animated-border`
  - `.scanline`

### Configuração Tailwind

- Arquivo: `tailwind.config.ts`
- Extensões relevantes:
  - fontes (`Inter`, `Fira Code`)
  - paleta baseada em variáveis HSL
  - animações auxiliares (`accordion-*`, `pulse-neon`)

## Testes e qualidade

### Unit tests

- `vitest.config.ts` configura ambiente `jsdom`.
- Setup global em `src/test/setup.ts` (inclui mock de `matchMedia`).
- Exemplo atual: `src/test/example.test.ts`.

### E2E (Playwright)

- Configuração base via `playwright.config.ts` e `playwright-fixture.ts` usando integração do Lovable.
- No estado atual, o projeto não expõe script dedicado de e2e no `package.json`.

### Lint

- Configuração em `eslint.config.js` com `typescript-eslint`, `react-hooks` e `react-refresh`.

## Pontos de atenção identificados na revisão

1. `src/components/HeroSection.tsx` importa `@/assets/profile.png`, mas `src/assets/profile.png` nao existe atualmente.
   - Impacto: erro no `npm run dev` e no build.
   - Opções:
	 - criar `src/assets/profile.png`
	 - ou mover para `public/` e usar caminho absoluto (ex.: `/profile.png`).

2. Há arquivos de infraestrutura de e2e (Playwright/Lovable), mas sem comando dedicado de execução em `package.json`.

3. Existe lockfile de `bun` (`bun.lock`) e uso corrente com `npm`.
   - Recomendação: padronizar um gerenciador para reduzir inconsistências em CI.

## Troubleshooting

### Erro: Failed to resolve import "@/assets/profile.png"

Corrija criando o arquivo esperado:

```text
src/assets/profile.png
```

Ou altere para asset em `public`:

```tsx
<img src="/profile.png" alt="Ricael Durand" />
```

### Aviso: Browserslist data is old

```powershell
npx update-browserslist-db@latest
```

## Próximos passos recomendados

1. Resolver o asset ausente da `HeroSection`.
2. Adicionar testes para componentes críticos (`HeroSection`, `ProjectsSection`, `ContactSection`).
3. Definir estratégia de deploy (Vercel/Netlify/GitHub Pages) e documentar pipeline.
4. Padronizar package manager (`npm` ou `bun`) no time/CI.

---

Se quiser, no próximo passo eu também posso criar uma versão "README para recrutadores" (mais enxuta) e manter esta como documentação técnica completa.
