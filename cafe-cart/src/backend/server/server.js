import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

// Fix path issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db/db.json")); // Adjusted path
const middlewares = jsonServer.defaults();

server.use(middlewares);

console.log(router.db)

server.get("/menu", (req, res) => {
  const db = router.db; 
  res.json({
    icedDrink: db.get("icedDrink"),
    hotDrink: db.get("hotDrink"),
    cakes: db.get("cakes"),
    pastries: db.get("pastries"),
    pasta: db.get("pasta"),
    mains: db.get("mains"),
    sides: db.get("sides")
  });
});

server.use(jsonServer.rewriter({  
  "/menu/iced_drink/": "/icedDrink/",
  "/menu/hot_drink": "/hotDrink",
  "/menu/cakes": "/cakes",
  "/menu/pastries": "/pastries",
  "/menu/pasta": "/pasta",
  "/menu/mains": "/mains",
  "/menu/sides": "/sides",
  "/menu": "/"
}));
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
