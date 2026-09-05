# Projeto: Finanças do Casal (AppSupabase)

## Estrutura do Projeto
- **index.html**: Aplicação principal (todas as funcionalidades em um arquivo)
- **supabase-config.js**: Configuração e inicialização do Supabase
- **auth.js**: Autenticação (login, cadastro, logout, redefinição de senha)
- **service-worker.js**: Service Worker para push notifications
- **sw-push.js**: Lógica de push notifications
- **firebase-messaging-sw.js**: Firebase Cloud Messaging (legado)
- **manifest.json**: Configuração PWA para instalação
- **package.json**: Dependências do projeto
- **Dockerfile**: Containerização para deploy

## Tecnologias Principais
- **Frontend**: JavaScript ES Modules, HTML5, CSS3 (tema escuro)
- **Backend**: Supabase (PostgreSQL + Auth)
- **Bibliotecas**: Chart.js, XLSX, jsPDF, Tabler Icons
- **PWA**: Service Worker, Manifest
- **Notificações**: Push API, Web Push

## Banco de Dados (Supabase)
### Tabelas:
- `transactions`: { user_id, description, amount, type, payment_status, due_date, category, created_by, status_source, repeat_type }
- `categories`: { user_id, name, icon }
- `goals`: { user_id, category_name, limit_value, month, year, couple_id }
- `couples`: { id, nome_ele, nome_ela, criado_por }
- `profiles`: { id, full_name, couple_id, avatar_url }
- `push_subscriptions`: { user_id, couple_id, endpoint, p256dh, auth_key }
- `couple_invites`: { couple_id, invited_email, phone, status, invited_by, used, used_by }

## Funcionalidades Principais
1. **Autenticação**: Login, cadastro, redefinição de senha, "Lembrar-me"
2. **Transações**: CRUD, repetição mensal/anual, status automático (Pago/A pagar baseado na data)
3. **Categorias**: CRUD com ícones personalizados
4. **Metas**: Geral e por categoria com barras de progresso
5. **Painel Gerencial**: Relatórios, gráficos (Chart.js), exportação (CSV/XLSX/PDF)
6. **Conta Casal**: Ativação, convites (email/WhatsApp), membros
7. **Push Notifications**: Via Service Worker (Supabase)
8. **Comando por voz**: Reconhecimento de fala com IA (Gemini API)
9. **Desbloqueio biométrico**: WebAuthn (digital/Face ID)
10. **Foto de perfil**: Upload por galeria/câmera
11. **Navegação**: Bottom navigation (Home, Relatórios, Metas, Ajustes)

## Regras de Desenvolvimento
- **JavaScript**: Use arrow functions, async/await, const/let (evite var)
- **Estilo**: Siga o padrão de cores laranja (#f97316), tema escuro
- **Validação**: Sempre valide inputs do usuário
- **Monetário**: Use currencyFormatter para valores (R$)
- **Comentários**: Comente funções complexas
- **Estrutura**: Respeite a estrutura existente do código
- **Arquivos**: Mantenha a lógica principal no index.html (app monolítico)

## Dependências (package.json)
- Supabase: @supabase/supabase-js
- Gráficos: Chart.js
- Exportação: XLSX, jsPDF, jspdf-autotable
- Ícones: @tabler/icons-webfont
- PWA: Service Worker, Manifest

## Deploy
- Containerização via Dockerfile
- Hospedagem: (defina aqui onde está hospedado)

## Observações Importantes
- O app foi migrado de Firebase para Supabase
- Push notifications estão em transição (Firebase → Supabase)
- Autenticação é gerenciada pelo Supabase Auth
- O app funciona offline com dados locais (cache)
- Convites por WhatsApp geram links com parâmetro ?convite=