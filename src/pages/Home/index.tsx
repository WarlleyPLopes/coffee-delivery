import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import hero from "../../assets/hero.png";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";
import hero_bg from "../../assets/hero-bg.svg";
import { defaultTheme } from "../../styles/themes/default";
import { Card } from "./components/Card";
import { coffees } from "../../../data.json";

export function Home() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <div>
              <Info>
                <div>
                  <ShoppingCart
                    size={32}
                    weight="fill"
                    color={defaultTheme.background}
                    style={{ backgroundColor: defaultTheme["yellow-700"] }}
                  />
                  <span>Compra simples e segura</span>
                </div>
                <div>
                  <Package
                    size={32}
                    weight="fill"
                    color={defaultTheme.background}
                    style={{ backgroundColor: defaultTheme["base-text"] }}
                  />
                  <span>Embalagem mantém o café intacto</span>
                </div>
                <div>
                  <Timer
                    size={32}
                    weight="fill"
                    color={defaultTheme.background}
                    style={{ backgroundColor: defaultTheme["yellow-500"] }}
                  />
                  <span>Entrega rápida e rastreada</span>
                </div>
                <div>
                  <Coffee
                    size={32}
                    weight="fill"
                    color={defaultTheme.background}
                    style={{ backgroundColor: defaultTheme["purple-500"] }}
                  />
                  <span>O café chega fresquinho até você</span>
                </div>
              </Info>
            </div>
          </div>

          <div>
            <img src={hero} alt="Café do Coffee Delivery" />
          </div>
        </HeroContent>
        <img src={hero_bg} id="img-bg" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
