import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import { RodaLayout } from "@/components/roda/RodaLayout";
import RodaHub from "./pages/roda/RodaHub";
import RodaEdicoes from "./pages/roda/RodaEdicoes";
import RodaEdicao from "./pages/roda/RodaEdicao";
import Especialistas from "./pages/roda/Especialistas";
import EspecialistaPerfil from "./pages/roda/EspecialistaPerfil";
import Conteudos from "./pages/roda/Conteudos";
import ConteudoArtigo from "./pages/roda/ConteudoArtigo";
import Privacidade from "./pages/roda/Privacidade";

const queryClient = new QueryClient();

const rodaRoutes: { path: string; element: JSX.Element }[] = [
  { path: "/roda-de-conversa", element: <RodaHub /> },
  { path: "/roda-de-conversa/edicoes", element: <RodaEdicoes /> },
  { path: "/roda-de-conversa/:slug", element: <RodaEdicao /> },
  { path: "/especialistas", element: <Especialistas /> },
  { path: "/especialistas/:slug", element: <EspecialistaPerfil /> },
  { path: "/conteudos", element: <Conteudos /> },
  { path: "/conteudos/:slug", element: <ConteudoArtigo /> },
  { path: "/privacidade", element: <Privacidade /> },
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/links" element={<Links />} />
            {rodaRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<RodaLayout>{route.element}</RodaLayout>}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
