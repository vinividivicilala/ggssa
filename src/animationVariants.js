export const zoomInOut = {
  initial: {
    opacity: 0,
    scale: 1.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.0,
      duration: 1.5,
      // type: "spring",
      // stiffness: 150,
      // damping: 5,
    },
  },
};

export const zoomInOutLeftRight = {
  initial: {
    opacity: 0,
    x: -120,
    scale: 1.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: 0.0,
      duration: 1.5,
      // type: "spring",
      // stiffness: 150,
      // damping: 5,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.0,
      duration: 1.5,
      // type: "spring",
      // stiffness: 150,
      // damping: 5,
    },
  },
};

export const rightLeftBounce1 = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.5,
      stiffness: 150,
      damping: 5,
    },
  },
};

export const rightLeft1 = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
};

export const leftRight1 = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
};

export const rightLeft2 = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } },
};

export const rightLeft3 = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.2 } },
};

export const bottomUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.25 } },
};

export const buttonVariants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, delay: 0.25 },
  },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const onClickScale = {
  tap: { scale: 1.2 },
};
