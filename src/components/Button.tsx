
interface Props {
  onPressFunction: (arg: any) => void; 
  prompt: string;
}

export default function StartPrompt({onPressFunction, prompt} : Props) {
  return (
    <button className="bg-yellow-200 text-3xl font-semibold border-4 border-blue-800 rounded-3xl hover:bg-yellow-900 hover:text-gray-100 hover:border-blue-500"
    onClick={() => onPressFunction(null)}>{prompt}</button>
  )
}