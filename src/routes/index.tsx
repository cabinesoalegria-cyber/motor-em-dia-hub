import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bell,
  Car,
  FileText,
  BarChart3,
  Wallet,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Cloud,
  MonitorSmartphone,
  Sparkles,
  Check,
  ArrowRight,
  AlertTriangle,
  Clock,
  Droplet,
  History,
  UserX,
  FolderX,
  MessagesSquare,
  ClipboardList,
  CalendarClock,
  Send,
  TrendingUp,
  Users,
  Wrench,
  PieChart,
  LayoutDashboard,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motor em Dia — Nunca mais perca uma revisão por esquecimento" },
      {
        name: "description",
        content:
          "SaaS para oficinas mecânicas: lembretes automáticos, OS digitais, histórico de veículos e dashboard gerencial. Teste grátis por 14 dias.",
      },
      { property: "og:title", content: "Motor em Dia — Gestão para oficinas mecânicas" },
      {
        property: "og:description",
        content:
          "Transforme cada serviço em cliente recorrente com lembretes automáticos e ordens de serviço digitais.",
      },
    ],
  }),
  component: Index,
});

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

const PRIMARY_CLS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-orange transition-all hover:bg-primary-hover hover:-translate-y-0.5";
const SECONDARY_CLS =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink/30 hover:bg-surface";

type LinkBtnProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
};

function PrimaryLink({ children, href, className = "", external }: LinkBtnProps) {
  const ext = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${PRIMARY_CLS} ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryLink({ children, href, className = "", external }: LinkBtnProps) {
  const ext = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${SECONDARY_CLS} ${className}`}
    >
      {children}
    </a>
  );
}

const SIGNUP_URL = "https://motor-em-dia.vercel.app/cadastro";
const LOGIN_URL = "https://motor-em-dia.vercel.app/login";
const WHATSAPP_URL =
  "https://wa.me/5531971464759?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Motor%20em%20Dia%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20para%20oficinas.";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

function IconBadge({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "ink" }) {
  const cls =
    tone === "primary"
      ? "bg-primary/10 text-primary"
      : "bg-ink/5 text-ink";
  return (
    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${cls}`}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FeatureBar />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <CalculatorSection />
      <SystemSection />
      <SecuritySection />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-4.5 w-4.5" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-bold text-ink">Motor em Dia</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <a href="#problema" className="hover:text-ink">Problema</a>
          <a href="#solucao" className="hover:text-ink">Solução</a>
          <a href="#beneficios" className="hover:text-ink">Benefícios</a>
          <a href="#sistema" className="hover:text-ink">O Sistema</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-emerald-500/40 hover:text-emerald-600 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
            WhatsApp
          </a>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-ink hover:text-primary sm:inline"
          >
            Entrar
          </a>
          <PrimaryLink href={SIGNUP_URL} className="px-4 py-2.5 text-xs">
            Teste 14 dias grátis
          </PrimaryLink>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background py-10 lg:py-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionLabel>Sistema para oficinas mecânicas</SectionLabel>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Nunca mais perca uma{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">revisão</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/20" />
              </span>{" "}
              por esquecimento.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Transforme cada serviço em cliente recorrente, com lembretes automáticos, histórico
              organizado e ordens de serviço digitais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={SIGNUP_URL}>
                Teste grátis por 14 dias <ArrowRight className="h-4 w-4" />
              </PrimaryLink>
              <SecondaryLink href="#calculadora" external={false}>Quero ver funcionando</SecondaryLink>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {["14 dias grátis", "Sem cartão de crédito", "Cancelamento a qualquer momento"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroMockup />
        </div>
      </Container>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <div className="relative rounded-2xl border border-border bg-card p-5 shadow-elevated">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-ink-soft">Dashboard</div>
            <div className="font-display text-lg font-bold text-ink">Motor em Dia</div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-surface-alt" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface-alt" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { l: "OS abertas", v: "24", i: ClipboardList },
            { l: "Revisões hoje", v: "08", i: CalendarClock },
            { l: "Faturamento", v: "R$ 38k", i: TrendingUp },
          ].map(({ l, v, i: Icon }) => (
            <div key={l} className="rounded-xl border border-border bg-surface p-3">
              <Icon className="mb-2 h-4 w-4 text-primary" />
              <div className="text-xs text-ink-soft">{l}</div>
              <div className="text-lg font-bold text-ink">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Lembretes de hoje</span>
            <span className="text-xs text-ink-soft">5 clientes</span>
          </div>
          <div className="space-y-2.5">
            {[
              { n: "João Pereira", c: "Honda Civic • Troca de óleo", k: "ABC-1234" },
              { n: "Maria Santos", c: "VW Gol • Revisão 20.000 km", k: "DEF-5678" },
              { n: "Carlos Lima", c: "Toyota Corolla • Alinhamento", k: "GHI-9012" },
            ].map((r) => (
              <div key={r.k} className="flex items-center justify-between rounded-lg bg-card px-3 py-2.5 shadow-soft">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-ink">{r.n}</div>
                  <div className="truncate text-xs text-ink-soft">{r.c}</div>
                </div>
                <button className="inline-flex shrink-0 items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  <Send className="h-3 w-3" /> Avisar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-card md:flex md:items-center md:gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600">
          <MessageCircle className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs text-ink-soft">WhatsApp enviado</div>
          <div className="text-sm font-semibold text-ink">+248 esta semana</div>
        </div>
      </div>
    </div>
  );
}

function FeatureBar() {
  const items = [
    { i: Bell, t: "Lembretes automáticos" },
    { i: History, t: "Histórico de veículos" },
    { i: FileText, t: "OS digitais" },
    { i: MessageCircle, t: "WhatsApp integrado" },
    { i: LayoutDashboard, t: "Dashboard gerencial" },
    { i: Wallet, t: "Controle financeiro" },
  ];
  return (
    <section className="border-b border-border bg-card py-8">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  const cards = [
    { i: Clock, t: "Revisões esquecidas", d: "O cliente promete ‘passar semana que vem’ e nunca mais volta. Sem um lembrete, ele simplesmente esquece." },
    { i: Droplet, t: "Trocas de óleo perdidas", d: "A troca de óleo é o serviço mais recorrente. Cada troca esquecida é dinheiro direto na mesa do concorrente." },
    { i: AlertTriangle, t: "Falta de acompanhamento", d: "Sem acompanhar o histórico do veículo, sua oficina perde oportunidades de oferecer serviços preventivos no momento certo." },
    { i: UserX, t: "Clientes que nunca retornam", d: "Conquistar um novo cliente custa de 5 a 7 vezes mais do que manter um. Você está perdendo dinheiro na retenção." },
    { i: FolderX, t: "Histórico desorganizado", d: "Informações em papel, caderno ou memória do mecânico. Quando alguém sai, o histórico vai junto." },
    { i: MessagesSquare, t: "WhatsApp virou bagunça", d: "Clientes, fornecedores, família — tudo misturado. Impossível acompanhar quem precisa retornar e quando." },
  ];
  return (
    <section id="problema" className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Quantos clientes sua oficina já perdeu por esquecimento?
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Esses problemas custam dinheiro — e a maioria dos donos de oficina não percebe porque a perda é silenciosa.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ i: Icon, t, d }) => (
            <Card key={t}>
              <IconBadge tone="ink">
                <Icon className="h-5 w-5" />
              </IconBadge>
              <h3 className="text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SolutionSection() {
  const steps = [
    { i: Car, t: "Cadastro do veículo", d: "Cliente, carro e quilometragem registrados em 2 minutos. Histórico centralizado para sempre." },
    { i: ClipboardList, t: "Registro da manutenção", d: "OS criada, serviços e próximo prazo de retorno definidos com precisão." },
    { i: Bell, t: "Lembrete automático", d: "O sistema avisa quando o cliente precisa voltar — por data, quilometragem ou tipo de serviço." },
    { i: TrendingUp, t: "Retorno e fidelização", d: "Sua oficina chama o cliente na hora certa e aumenta o faturamento sem depender de novos anúncios." },
  ];
  return (
    <section id="solucao" className="bg-background py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>A solução</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Seu sistema de acompanhamento automático
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Um fluxo simples que transforma cada serviço realizado em uma oportunidade de retorno garantido.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ i: Icon, t, d }, idx) => (
            <Card key={t} className="relative">
              <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-primary/15">
                0{idx + 1}
              </span>
              <IconBadge>
                <Icon className="h-5 w-5" />
              </IconBadge>
              <h3 className="text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  const cards = [
    { i: Users, t: "Mais clientes retornando", d: "Clientes avisados no momento certo voltam mais. Não tem segredo: comunicação = fidelização." },
    { i: TrendingUp, t: "Faturamento recorrente", d: "Cada cliente fidelizado gera receita previsível todo mês, sem depender de novos anúncios." },
    { i: Bell, t: "Menos esquecimentos", d: "O sistema lembra por você. Nenhum cliente cai no esquecimento por falta de atenção." },
    { i: Sparkles, t: "Atendimento profissional", d: "Histórico completo, OS digital e comunicação organizada. Seu cliente percebe a diferença." },
    { i: History, t: "Histórico organizado", d: "Cada carro, cada serviço, cada troca — na nuvem, acessível de qualquer lugar, para sempre." },
    { i: LayoutDashboard, t: "Gestão mais eficiente", d: "Dashboard completo: OS abertas, revisões próximas e faturamento do mês em uma tela só." },
  ];
  return (
    <section id="beneficios" className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Benefícios</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            O que muda na sua oficina a partir do primeiro mês
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ i: Icon, t, d }) => (
            <Card key={t}>
              <IconBadge>
                <Icon className="h-5 w-5" />
              </IconBadge>
              <h3 className="text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CalculatorSection() {
  const [clients, setClients] = useState(30);
  const [ticket, setTicket] = useState(180);
  const [pct, setPct] = useState(50);

  const lost = useMemo(() => Math.round((clients * ticket * pct) / 100), [clients, ticket, pct]);
  const yearly = lost * 12;

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const naoVoltam = Math.round(pct / 10);

  const presets = [
    { label: "Oficina pequena", clients: 20, ticket: 150, pct: 40 },
    { label: "Oficina média", clients: 60, ticket: 220, pct: 50 },
    { label: "Oficina movimentada", clients: 120, ticket: 300, pct: 60 },
  ];

  const applyPreset = (p: { clients: number; ticket: number; pct: number }) => {
    setClients(p.clients);
    setTicket(p.ticket);
    setPct(p.pct);
  };

  return (
    <section id="calculadora" className="bg-background py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Simulação</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Veja quanto sua oficina pode estar perdendo todo mês
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Muitos clientes não voltam porque esquecem da próxima revisão ou porque ninguém da oficina chama no momento certo. Faça uma simulação simples e veja o impacto disso no seu caixa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="p-7">
            <div className="space-y-8">
              <CalcField
                icon={Users}
                title="Quantos clientes sua oficina atende por mês?"
                help="Pode ser uma média. Pense nos clientes que fazem troca de óleo, revisão, freios, suspensão ou outros serviços."
                display={`${clients} clientes por mês`}
                min={10}
                max={300}
                step={5}
                value={clients}
                onChange={setClients}
                minLabel="Poucos clientes"
                maxLabel="Muitos clientes"
              />
              <CalcField
                icon={Wallet}
                title="Quanto cada cliente costuma gastar em média?"
                help="Use uma média dos serviços mais comuns da sua oficina. Não precisa ser exato. Também conhecido como ticket médio."
                display={`${fmt(ticket)} por cliente`}
                min={50}
                max={2000}
                step={10}
                value={ticket}
                onChange={setTicket}
                minLabel="Serviço simples"
                maxLabel="Serviço mais caro"
              />
              <CalcField
                icon={UserX}
                title="De cada 10 clientes, quantos não voltam depois?"
                help="Muitos clientes não retornam porque esquecem da revisão ou porque a oficina não lembra eles na hora certa."
                display={`${naoVoltam} de cada 10 clientes não voltam`}
                min={10}
                max={90}
                step={10}
                value={pct}
                onChange={setPct}
                minLabel="Poucos somem"
                maxLabel="Muitos somem"
              />

              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Entenda a conta</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  Se sua oficina atende <strong>{clients} clientes por mês</strong>, cada cliente gasta em média <strong>{fmt(ticket)}</strong> e <strong>{naoVoltam} de cada 10</strong> não voltam, você pode estar deixando de faturar cerca de <strong>{fmt(lost)} por mês</strong>.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                  A ideia não é ser uma conta perfeita, mas mostrar o tamanho da oportunidade que pode estar escapando todos os meses.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">Escolha um exemplo parecido com sua oficina:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => applyPreset(p)}
                      className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-ink transition-all hover:border-primary hover:text-primary"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white shadow-elevated">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <PieChart className="h-3.5 w-3.5" /> Simulação
              </span>
              <p className="mt-5 text-base text-white/80">Sua oficina pode estar deixando de faturar</p>
              <p className="mt-2 font-display text-5xl font-extrabold text-primary">{fmt(lost)}</p>
              <p className="mt-1 text-sm text-white/60">por mês</p>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Em 12 meses, isso pode virar</p>
                <p className="mt-1 font-display text-2xl font-bold">{fmt(yearly)}</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/75">
                Esse dinheiro pode estar sendo perdido porque o cliente esquece da próxima revisão, troca de óleo ou manutenção preventiva. Com o Motor em Dia, sua oficina organiza os clientes e envia lembretes para chamar cada um na hora certa.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><Bell className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Lembrete da próxima revisão</li>
                <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Chamada do cliente pelo WhatsApp</li>
                <li className="flex items-start gap-2"><History className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Histórico de veículos organizado</li>
              </ul>

              <PrimaryLink href={SIGNUP_URL} className="mt-6 w-full">Quero recuperar esses clientes</PrimaryLink>

              <p className="mt-4 text-xs leading-relaxed text-white/60">
                O Motor em Dia ajuda sua oficina a não depender da memória. O sistema lembra quem precisa voltar, quando chamar e qual serviço oferecer.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CalcField({
  icon: Icon, title, help, display, value, onChange, min, max, step, minLabel, maxLabel,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string; help: string; display: string;
  value: number; onChange: (n: number) => void;
  min: number; max: number; step: number;
  minLabel: string; maxLabel: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-ink">{title}</label>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">{help}</p>
        </div>
      </div>
      <div className="mt-3 inline-flex rounded-lg bg-surface px-3 py-1.5 text-sm font-bold text-ink">
        {display}
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-alt accent-primary"
      />
      <div className="mt-1 flex justify-between text-xs text-ink-soft">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function SystemSection() {
  const modules = [
    { i: Users, t: "Clientes e veículos", d: "Cadastro completo e centralizado." },
    { i: FileText, t: "Ordens de serviço digitais", d: "OS criadas e assinadas em segundos." },
    { i: CalendarClock, t: "Revisões futuras", d: "Agenda inteligente de retornos." },
    { i: History, t: "Histórico completo", d: "Todo serviço de cada veículo, sempre." },
    { i: Wallet, t: "Controle financeiro", d: "Receitas, despesas e faturamento em ordem." },
    { i: LayoutDashboard, t: "Dashboard gerencial", d: "A oficina inteira em uma tela só." },
  ];
  return (
    <section id="sistema" className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>O sistema</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Tudo o que sua oficina precisa em um só lugar
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ i: Icon, t, d }) => (
            <Card key={t} className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-ink">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SecuritySection() {
  const cards = [
    { i: Cloud, t: "100% online", d: "Sem instalar nada" },
    { i: MonitorSmartphone, t: "Celular e computador", d: "Qualquer dispositivo" },
    { i: ShieldCheck, t: "Dados protegidos", d: "Criptografia total" },
    { i: Smartphone, t: "Backup automático", d: "Nuvem em tempo real" },
    { i: Sparkles, t: "Interface simples", d: "Pronto no primeiro dia" },
  ];
  return (
    <section className="bg-background py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Segurança</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Seguro, confiável e pronto para usar
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Sem instalação. Sem complicação. Começa a funcionar no primeiro dia.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map(({ i: Icon, t, d }) => (
            <Card key={t} className="text-center">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-ink">{t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{d}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-14 text-center text-white shadow-elevated sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Pare de perder clientes para o esquecimento.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Comece hoje a transformar manutenção em relacionamento e relacionamento em faturamento.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryLink href={SIGNUP_URL} className="px-8 py-4 text-base">
                Quero testar grátis <ArrowRight className="h-4 w-4" />
              </PrimaryLink>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Prefere falar com a gente? Chame no WhatsApp.
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              {["14 dias grátis", "Sem cartão", "Cancele quando quiser", "Suporte em português"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="text-sm text-ink-soft">© 2026 Motor em Dia. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-ink">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            WhatsApp
          </a>
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Entrar</a>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Criar conta grátis</a>
        </div>
      </Container>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-elevated transition-transform hover:scale-105 hover:bg-emerald-600"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
    </a>
  );
}
