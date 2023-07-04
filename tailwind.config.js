/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      spacing: {
        10: '10px',
        11: '11px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        29: '29px',
        30: '30px',
      },

      fontSize: {
        10: '10px',
      },

      lineHeight: {
        14: '14px',
        15: '15px',
        17: '17px',
        19: '19px',
        20: '20px',
        24: '24px',
      },

      borderWidth: {
        1: '1px',
      },
    },

    variants: {
      extend: {
        boxShadow: ['active', 'hover'],
        padding: ['last'],
      },
    },
  },
  plugins: [
    function groupPeer({ addVariant }) {
      let pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        'checked',
      ].map((variant) => (Array.isArray(variant) ? variant : [variant, `&:${variant}`]));

      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === 'function' ? state(ctx) : state;
          return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &');
        });
      }
    },
  ],
};
