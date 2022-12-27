import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v2.6.2/mod.ts";
import { logger } from "https://deno.land/x/hono@v2.6.2/middleware.ts";
import { bearerAuth } from "https://deno.land/x/hono@v2.6.2/middleware.ts";
import { ThermosController } from "./Thermos.ts";

const app = new Hono();
const thermos = new ThermosController();

app.use(logger());
app.use(bearerAuth({ token: "123456" }));

// Routes
app.post("/update", (context) => thermos.update(context));
app.get("/heartbeat");

serve(app.fetch);
