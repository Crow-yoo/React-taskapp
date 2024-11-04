import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";


// 타입 스크립트가 => 추론을 x => 개발자가 타입을 지정 annotate 해줘야 함.

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useTypedSelector((state) => state.logger);