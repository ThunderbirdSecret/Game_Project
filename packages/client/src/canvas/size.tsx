export function Size(canvas: any, context: any) {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window // учитываем соотношение пикселей в устройстве для четкой картинки

    canvas.width = width * ratio // eslint-disable-line no-param-reassign
    canvas.height = height * ratio // eslint-disable-line no-param-reassign
    context.scale(ratio, ratio)

    return true // Здесь возращаем инфу о ширине и высоте
    // данные будут использованны при следующей перерисовке
  }

  return false
}
