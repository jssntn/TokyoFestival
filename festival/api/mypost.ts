import { NextPageContext } from "next";
import Router from "next/router";
import axios, { AxiosResponse } from "axios";

export async function myPost(url: string, data: any, contentType: string, ctx: NextPageContext) {
  const cookie = ctx.req?.headers.cookie;

  try {
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        "Content-Type": contentType,
        Cookie: cookie,
      },
    });

    // Handle authentication or authorization errors based on the response status code
    if (response.status === 401 && !ctx.req) {
      Router.replace("/login");
      return {};
    }

    if (response.status === 401 && ctx.req) {
      ctx.res?.writeHead(302, {
        Location: "http://localhost:3000/login",
      });
      ctx.res?.end();
      return;
    }

    return response.data;
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
}
