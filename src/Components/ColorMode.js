import { useColorMode, FormLabel, Switch, FormControl} from '@chakra-ui/react'

const ColorMode  = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="theme-toggle" mb="0">
            {colorMode === "light" ? "Dark" : "Light"} Mode
          </FormLabel>
          <Switch id="theme-toggle" onChange={toggleColorMode}/>
      </FormControl>
    )
}

export default ColorMode;
