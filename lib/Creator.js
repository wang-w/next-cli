class Creator {
  constructor(name, context) {

  }

  async create(cliOptions = {}, preset = null) {
    // 处理用户输入
    const preset = await this.promptAndResolvePreset();

    // 初始化安装环境
    await this.initPackageManagerEnv(preset);

    // 生成项目文件，生成配置文件
    const generator = await this.generate(preset);

    // 生成 readme文件
    await this.generateReadme(generator);

    this.finished();
  }
}

module.exports = Creator;