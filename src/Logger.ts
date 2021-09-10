import pino from "pino";

export default (tag: string) =>
  pino({
    prettyPrint: {
      messageFormat: `[${tag}] {msg}`,
      colorize: process.env.NODE_ENV === "development",
      ignore: "pid,hostname,timestamp",
      messageKey: "msg",
      translateTime: true,
    },
  });
