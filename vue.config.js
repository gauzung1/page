
const ENV = process.env.NODE_ENV;



module.exports = {
    outputDir: "docs",
    publicPath: ENV === "development" ? "" : "/page/", 
    chainWebpack: config =>{
      config.plugin('html')
        .tap(args => {
          args[0].title = "focus";
          return args;
        })
    }
};