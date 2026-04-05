export const analysisSystemPrompt = "你只返回合法 JSON。";

export function buildAnalysisUserPrompt(viewModel) {
  return [
    "你是季节性产品分析助手。",
    "请根据天气和场景输出 JSON，不要输出任何额外文字。",
    'JSON 格式: {"level":"current|incremental|rising|declining","current":"...","incremental":"...","rising":"...","declining":"..."}',
    "要求：四段文案必须使用简体中文，每段不超过100字，具体可执行。",
    `州: ${viewModel.state.name}`,
    `城市: ${viewModel.state.query}`,
    `场景: ${viewModel.persona.label}`,
    `场景说明: ${viewModel.persona.description}`,
    `温度: ${viewModel.weather.tempC}°C`,
    `体感温度: ${viewModel.weather.feelsLikeC}°C`,
    `湿度: ${viewModel.weather.humidity}%`,
    `天气: ${viewModel.weather.desc}`,
    `风速: ${viewModel.weather.windKmph} km/h`,
    `降水: ${viewModel.weather.precipMm} mm`
  ].join("\n");
}
