module Main

import Effects
import Effect.StdIO
import Effect.State

-------------------------------------------------------------
--- Basic effect based program
-------------------------------------------------------------

||| Abstract IO based application
app : Eff () [STATE (List String), STDIO]
app = do  putStr "Enter a name?"
          name <- pure (trim !getStr)
          putStrLn ("Hello " ++ name ++ "!")
          update ((::) name)
          personList <- get
          putStrLn ("I've said hello to the following people: " ++ show personList ++ " people")
          putStrLn ("That is " ++ show (length personList) ++ " people!")
          app

||| Run application
main : IO ()
main = run app
