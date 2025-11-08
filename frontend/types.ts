export type Slot = {
  id: string
  date: string
  time: string
  price: number
  booked?: boolean
}

export type Experience = {
  _id?: string
  id?: string
  title: string
  shortDescription?: string
  longDescription?: string
  coverImage: string
  slots: Slot[]
}
