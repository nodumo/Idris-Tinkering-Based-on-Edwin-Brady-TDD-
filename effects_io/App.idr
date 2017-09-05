module Main

import Effects
import Effect.StdIO

-------------------------------------------------------------
--- Basic effect based program
-------------------------------------------------------------

||| Abstract IO based application
app : { [STDIO] } Eff ()
app = do  putStrLn namePromptMessage
          name <- getStr
          putStrLn (greetingMessage ++ " " ++ name)
  where
  greetingMessage   = "Hello!"
  namePromptMessage = "What is your name?"

||| Run application
main : IO ()
main = run app
