export type GlowTheme = 'blue' | 'purple' | 'green' | 'red' | 'orange';

export interface ColorTheme {
  glowColor: string;
  colors: string[];
}

export function getCardColorTheme(theme: GlowTheme): ColorTheme {
  switch (theme) {
    case 'blue':
      return {
        glowColor: '217 91 60',
        colors: ['#38bdf8', '#818cf8', '#c084fc'],
      };
    case 'purple':
      return {
        glowColor: '271 81 60',
        colors: ['#c084fc', '#f472b6', '#38bdf8'],
      };
    case 'green':
      return {
        glowColor: '142 76 45',
        colors: ['#34d399', '#6ee7b7', '#a7f3d0'],
      };
    case 'red':
      return {
        glowColor: '0 84 60',
        colors: ['#f87171', '#fca5a5', '#fecaca'],
      };
    case 'orange':
      return {
        glowColor: '27 96 55',
        colors: ['#fb923c', '#fdbb2d', '#22c55e'],
      };
    default:
      return {
        glowColor: '217 91 60',
        colors: ['#38bdf8', '#818cf8', '#c084fc'],
      };
  }
}
