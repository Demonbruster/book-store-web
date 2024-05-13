import { MantineStyleProps, Text } from "@mantine/core"

export interface ITitleTextProps {
  value: string
  style?: MantineStyleProps
}

export default function TitleText(props: ITitleTextProps) {
  return(
    <Text fw="bold" fz="h3" c="dimmed" {...props.style} >{props.value}</Text>
  )
}