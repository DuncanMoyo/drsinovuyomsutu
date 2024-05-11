export const servicesData: { condition: string }[] = [
  {
    condition: "Depressive Disorders",
  },
  {
    condition: "Bipolar and Related Disorders",
  },
  {
    condition: "Anxiety Disorders",
  },
  {
    condition: "Schizophrenia Spectrum and Other Disorders",
  },
  {
    condition: "Trauma and Stress-related Disorders",
  },
  {
    condition: "Obsessive-Compulsive and Related Disorders",
  },
  {
    condition: "Woman's Mental Health",
  },
  {
    condition: "Adolescent Mental Health",
  },
  {
    condition: "Personality Disorders",
  },
];

export const navLinks: { name: string; url: string }[] = [
  {
    name: "profile",
    url: "#profile",
  },
  {
    name: "services",
    url: "#services",
  },
  {
    name: "consultations",
    url: "#consultations",
  },
  {
    name: "contact",
    url: "#contact",
  },
];

type Direction = "left" | "right" | "up" | "down";
type TransitionType = "tween" | "spring" | "inertia" | "just";
type AnimationConfig = {
  direction?: Direction;
  type: TransitionType;
  delay: number;
  duration: number;
};

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationConfig) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationConfig) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
