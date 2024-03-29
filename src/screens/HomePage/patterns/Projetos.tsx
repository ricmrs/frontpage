import Box from "@/components/Box";
import MoveButton from "@/components/Button/MoveButton";
import Projeto from "@/components/Projeto";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";

export default function Projetos() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;
  const stepWidth = 190;
  const stepGap = 20;

  return (
    <Box
      tag="section"
      id="projetos"
      styleSheet={{
        backgroundColor: theme.colors.primary.x200,
        width: "100%",
        alignItems: "center",
        borderBottom: "5px solid #000",
        height: { xs: "380px", xl: "500px" },
        paddingVertical: { xs: "30px", xl: "40px" }
      }}
    >
      <Text tag="h2" variant="heading1" colorVariant="neutral" colorVariantEnabled>Projetos</Text>
      <Box styleSheet={{ flexDirection: "row", alignItems: "center", gap: "30px", paddingVertical: { xs: "40px", xl: "60px" } }}>
        <MoveButton
          type="previous"
          onClick={() => setActiveStep(activeStep - 1)}
          disable={activeStep == 0}
          backgroundStyleSheets={{
            height: "40px",
            width: "40px",
            backgroundColor: theme.colors.primary.x600,
            visibility: `${activeStep == 0 ? "hidden" : "visible"}`,
            display: { xs: "flex", md: "none" }
          }}
          arrowStyleSheets={{ color: theme.colors.accent.x050 }}
        />
        <Box
          styleSheet={{
            flexDirection: "row",
            height: { xs: "190px", md: "190px", xl: "260px" },
            maxWidth: { xs: `${stepWidth}px`, md: "max-content", xl: "max-content" },
            overflow: { xs: "hidden", md: "visible", xl: "visible" }
          }}
        >
          <Box
            styleSheet={{
              flexDirection: "row",
              gap:{ xs:  `${stepGap}px`, md: "35px", xl: "130px" },
              transform: { xs: `translateX(${-activeStep * (stepWidth + stepGap/2)}px)`, md: "translateX(0)", xl: "translateX(0)" },
              transition: { xs: "transform 500ms ease-in-out", md: "none", xl: "none" }
            }}
          >
            <Projeto nome="space tourism website" src="assets/space-tourism-website.png" href="https://space-tourism-website-frontendmentor.vercel.app/"/>
            <Projeto nome="rock paper scissores" src="assets/rock-paper-scissors.png" href="https://rock-paper-scissors-kohl-two.vercel.app/"/>
            <Projeto nome="jogo da velha" src="assets/jogo-da-velha.png" href="https://ricmrs.github.io/jogo-da-velha/"/>
          </Box>
        </Box>
        <MoveButton
          type="next"
          onClick={() => setActiveStep(activeStep + 1)}
          disable={activeStep == maxSteps}
          backgroundStyleSheets={{
            height: "40px",
            width: "40px",
            backgroundColor: theme.colors.primary.x600,
            visibility: `${activeStep == maxSteps ? "hidden" : "visible"}`,
            display: { xs: "flex", md: "none" }
          }}
          arrowStyleSheets={{ color: theme.colors.accent.x050 }}
        />
      </Box>
    </Box>
  )
}
