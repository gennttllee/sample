import response from "../data/StackList"
import styles from './stack.module.css'
import { useState} from "react"
import dynamic from 'next/dynamic'
import Card from "./Card"


const Stack = ({ setSide, cart, setCart }) => {
    const tracking = response.filter(item => item.tags.includes('Experiment tracking'));
    const experimentation = response.filter(item => item.tags.includes('Experimentation'))
    const data = response.filter(item => item.tags.includes('Data versioning'))
    const code = response.filter(item => item.tags.includes('Code versioning'))
    const pipeline = response.filter(item => item.tags.includes('Pipeline orchestration'))
    const runtime = response.filter(item => item.tags.includes('Runtime engine'))
    const artifact = response.filter(item => item.tags.includes('Artifact tracking'))
    const model = response.filter(item => item.tags.includes('Model registry'))
    const serving = response.filter(item => item.tags.includes('Model serving'))
    const monitor = response.filter(item => item.tags.includes('Model monitoring'))
    const [back, setBack] = useState({ element: null, div: ['Experiment tracking', 'Experimentation', 'Data versioning', 'Code versioning', 'Pipeline orchestration', 'Runtime engine', 'Artifact tracking', 'Model registry', 'Model serving', 'Model monitoring'] })

    return (
        <div >
            <Card
                back={back}
                setBack={setBack}
                h1='Experiment tracking'
                note='Keep track of important information about your experiments such as parameters, metrics and models.'
                data={tracking}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Experimentation'
                note='Explore your data and run scripts interactively. Have your code, text, data and visualizations in a single place.'
                data={experimentation}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Data versioning'
                note='Capture versions of your data to reproduce, trace, and keep track of your ML model lineage'
                data={data}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Code versioning'
                note='Version your notebooks, pipelines and configuration files.'
                data={code}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Pipeline orchestration'
                note='Automate the steps of your ML experiments. Schedule automatic pipeline runs to retrain the model on new data.'
                data={pipeline}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Runtime engine'
                note='Automate the steps of your ML experiments. Schedule automatic pipeline runs to retrain the model on new data.'
                data={runtime}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Artifact tracking'
                note='Store and keep track of datasets, models, and evaluation across your experiments and pipelines.'
                data={artifact}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Model registry'
                note='Store your models in a centralized repository to track and deploy them'
                data={model}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1='Model serving'
                note='Create API endpoints and use your model to make predictions.'
                data={serving}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
            <Card
                back={back}
                setBack={setBack}
                h1 = 'Model monitoring'
                note='Track your model to detect performance degradation, bias and data drift. Detect issues early and take action.'
                data={monitor}
                setSide={setSide}
                setCart ={setCart}
                cart ={cart}
            />
        </div>
    )
}

export default dynamic(() => Promise.resolve(Stack), { ssr: false })