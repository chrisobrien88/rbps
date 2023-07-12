import { google } from "googleapis";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  //   const repo1 = await res.json();
  const repo = { name: "chris", stargazers_count: 5 };
  return { props: { repo } };
};

export default function Leaderboard({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("what", repo);
  return <div>repo.stargazers_count</div>;
}

// export async function getServerSideProps() {

//     const auth = await google.auth.getClient({
//         scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//         });
//     const sheets = google.sheets({version: 'v4', auth});

//     const range = `Score Cards!A1:N10`
//     const response = await sheets.spreadsheets.values.get({
//         spreadsheetId: process.env.SHEET_ID,
//         range,
//     });

//     const scores = response.data.values;
//     const string = "a string"

//     return {
//         props: {
//             scores,
//             string
//         },
//     };

// }
