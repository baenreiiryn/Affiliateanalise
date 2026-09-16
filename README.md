# Affiliate Análise

Aplicação local para análise de marketing de afiliados, inicialmente preparada para Rakuten Affiliate Japan e Pinterest.

## Fase atual

Fase 1: fundação local com Next.js, TypeScript, PostgreSQL, Prisma e Docker Compose. As integrações reais com Rakuten/Pinterest e o ML serão implementados em fases posteriores.

## Requisitos

- Docker + Docker Compose
- Node.js 20+ (opcional para desenvolvimento fora do Docker)

## Iniciar

1. Copie `.env.example` para `.env`.
2. Execute `docker compose up --build`.
3. Acesse `http://localhost:3000`.

O PostgreSQL fica disponível localmente na porta 5432.

## Desenvolvimento sem Docker para o web app

```bash
cd web
npm install
npx prisma generate
npm run dev
```

É necessário ter PostgreSQL acessível pela `DATABASE_URL`.

## Estrutura

- `web/`: Next.js + TypeScript + Prisma
- `worker/`: reservado para jobs locais
- `ml/`: reservado para pipeline Python futuro
- `imports/rakuten/`: entrada futura de CSVs oficiais da Rakuten
- `backups/`: backups locais (ignorados pelo Git)

## Segurança

Nunca faça commit do `.env`. Credenciais reais ficam somente no ambiente local. Não será usado scraping da Rakuten, automação de login, CAPTCHA bypass, cliques artificiais ou endpoints fictícios.
