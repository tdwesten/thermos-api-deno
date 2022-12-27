import { type Environment } from "https://deno.land/x/hono@v2.6.2/types.ts";
import { Context } from "https://deno.land/x/hono@v2.6.2/mod.ts";

type UpdateRequest = {
  temperature: number;
  humidity: number;
  timestamp: number;
  cv_status: boolean;
};

export class ThermosController {
  async update(context: Context<string, Environment, unknown>) {
    const update: UpdateRequest = await context.req.json();

    return context.json({ status: "ok" });
  }
}
