import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Portada Section */}
        <Card className="border-2">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-primary mb-6">Portada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 text-lg">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-muted-foreground">Integrante:</span>
                <span className="text-foreground">Santiago Zuluaga</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-muted-foreground">Curso:</span>
                <span className="text-foreground">NRC-4897-Ingeniería de Software Avanzada</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-muted-foreground">Semana:</span>
                <span className="text-foreground">7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-muted-foreground">Profesor:</span>
                <span className="text-foreground">Cesar Augusto Gutiérrez Rodríguez</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Caso de estudio Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Caso de estudio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Proyecto:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un scraper en Python que automatiza la extracción de tarifas (rates) de transporte terrestre FTL —por ejemplo cotizaciones de distintos carriers para movimientos puerta a puerta— desde varios portales/marketplaces y sistemas web (intranets de carriers, portales de brokers, etc.)
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Descripción Técnica:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inicializa y configura un webdriver de Selenium (con WebDriverWait), realiza el login en el portal y navega a la URL objetivo; devuelve (driver, wait) listos para usar.
              </p>
              
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-semibold text-foreground mb-2">Firma de función:</h4>
                <code className="text-sm text-primary font-mono">
                  initialize_driver(username: str, password: str, wait_time: int = 15) {'->'} (driver, wait)
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default Index;
