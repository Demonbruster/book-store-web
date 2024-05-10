import { MantineStyleProps, Text } from "@mantine/core"

interface ITitleText {
  value: string
  style?: MantineStyleProps
}

export default function TitleText(props: ITitleText) {
  return(
    <Text fw="bold" fz="h3" c="dimmed" {...props.style} >{props.value}</Text>
  )
}