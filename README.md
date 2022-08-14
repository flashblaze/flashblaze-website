# New website can be found at [flashblaze.xyz](https://flashblaze.xyz) and the repo is at [flashblaze-astro](https://github.com/flashblaze/flashblaze-astro)

## Old website: [old.flashblaze.xyz](https://old.flashblaze.xyz)

## Built using 
- [React](https://reactjs.org/) 
- [Gatsby](https://gatsbyjs.org/)
- [react-spring](https://github.com/pmndrs/react-spring)
- [theme-ui](https://theme-ui.com/)

Deployed on [Vercel](https://vercel.com)

## [Figma](https://www.figma.com/file/HVOTTsnP2DQ2Kvy5T0fS2J/Website-Redesign?node-id=17%3A4)

## Installation

1. Clone the repo using `git clone https://github.com/flashblaze/flashblaze-website.git`
2. Go into the directory and install dependencies using yarn `cd flashblaze-website && yarn`
3. Create a table with name *views* and 3 columns:
   1. `id`: autoincrement int8
   2. `post`: text
   3. `views`: int8
4. Create `.env.development` and `.env.production` to store the environment variables and enter them like so or copy the `.env.example` file contents:

```
GATSBY_GRAPHQL_IDE=playground
GATSBY_SUPABASE_URL=SUPABSE_URL
GATSBY_SUPABASE_ANON_KEY=SUPABASE_KEY
```

4. Replace the *GATSBY_SUPABASE_URL* and *GATSBY_SUPABASE_ANON_KEY* with your keys
5. Start the project using yarn: `yarn start`
