export const GAME_TITLE = 'Амьтаныг таагаарай.'
//export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!


export const WIN_MESSAGES = ['Сайн байлаа', 'Гайхалтай', 'Мундаг байна']
export const GAME_COPIED_MESSAGE = 'Тоглоом хуулагдлаа'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Цөөхөн үсэг байна'
export const WORD_NOT_FOUND_MESSAGE = 'Үг олдсонгүй'
export const HARD_MODE_ALERT_MESSAGE =
  'Хүнд түвшин зөвхөн эхлэлдээ тохируулах боломжтой'
export const HARD_MODE_DESCRIPTION =
  'Илэрсэн бүх зөвлөмжийг дараагийн таамаглалд ашиглах ёстой'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Өнгөний харааг сайжруулах зорилгоор'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Таах ёстой байсан үг ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Болсон'
export const DELETE_TEXT = 'Устгах'
export const STATISTICS_TITLE = 'Статистик'
export const GUESS_DISTRIBUTION_TEXT = 'Таах чадвар'
export const NEW_WORD_TEXT = 'Шинэ үг'
export const SHARE_TEXT = 'Хуваалцах'
export const TOTAL_TRIES_TEXT = 'Нийт оролдлого'
export const SUCCESS_RATE_TEXT = 'Амжилтын хувь'
export const CURRENT_STREAK_TEXT = 'Одоогийн амжилт'
export const BEST_STREAK_TEXT = 'Дээд амжилт'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Та суулгагдсан хөтөч ашиглаж байгаа бөгөөд илэрцээ хуваалцах эсвэл хадгалахад асуудал гарч болзошгүй. Бид таныг төхөөрөмжийнхөө үндсэн хөтөчийг ашиглахыг зөвлөж байна.."
