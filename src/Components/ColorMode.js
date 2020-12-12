import { useColorMode, FormLabel, Switch, FormControl} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ColorMode  = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="theme-toggle" mb="0">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />} Mode
          </FormLabel>
          <Switch id="theme-toggle" onChange={toggleColorMode}/>
      </FormControl>
    )
}

export default ColorMode;
