import ReactFlow, { Controls, Handle, Position } from 'react-flow-renderer';
import { useState, useRef, useMemo } from 'react';
import Image from 'next/dist/client/image';
import styles from './graph.module.css'
import dynamic from 'next/dynamic';
import html2canvas from 'html2canvas';

function Graph ({ cart, setCart }){
    const divRef = useRef();
    const tracking = cart.filter(item => item.title === 'Experiment tracking');
    const experimentation = cart.filter(item => item.title === 'Experimentation')
    const data = cart.filter(item => item.title === 'Data versioning')
    const code = cart.filter(item => item.title === 'Code versioning')
    const pipeline = cart.filter(item => item.title === 'Pipeline orchestration')
    const artifact = cart.filter(item => item.title === 'Artifact tracking')
    const model = cart.filter(item => item.title === 'Model registry')
    const serving = cart.filter(item => item.title === 'Model serving')
    const monitor = cart.filter(item => item.title === 'Model monitoring')

    const tracker = () => {
        return (
            <div className={styles.top}>
                <div className={styles.div}>
                    <p className={styles.styler}>Experiment tracking</p>
                    {tracking.length > 0 ? tracking.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Bottom} id="a" />
                <Handle type="source" position={Position.Right} id="b" />
            </div>
        )
    }

    const experiment = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Experimentation</p>
                    {experimentation.length > 0 ? experimentation.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="source" position={Position.Bottom} id="a" />
                <Handle type="target" position={Position.Left} id="b" />
            </div>
        )
    }

    const dataVersion = () => {
        return (
            <div className={styles.top}>
                <Handle type="source" position={Position.Bottom} id='c' />
                <div className={styles.div}>
                    <p className={styles.styler}>Data versioning</p>
                    {data.length > 0 ? experimentation.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Top} id="a" />
                <Handle type="source" position={Position.Top} id="b" />
            </div>
        )
    }

    const codeVersion = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Code versioning</p>
                    {code.length > 0 ? code.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Top} id="a" />
                <Handle type="source" position={Position.Bottom} id="b" />
            </div>
        )
    }

    const orchestration = () => {
        return (
            <div className={styles.top}>
                <Handle type="source" position={Position.Right} id='c' />
                <Handle type="source" position={Position.Bottom} id='d' />
                <Handle type="target" position={Position.Bottom} id='e' />
                <div className={styles.div}>
                    <p className={styles.styler}>Pipeline orchestration</p>
                    {pipeline.length > 0 ? pipeline.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Top} id="a" />
                <Handle type="target" position={Position.Left} id="b" />
            </div>
        )
    }

    const artifactTrack = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Artifact tracking</p>
                    {artifact.length > 0 ? artifact.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Top} id="a" />
                <Handle type="source" position={Position.Bottom} id="b" />
            </div>
        )
    }

    const modelReg = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Model registry</p>
                    {model.length > 0 ? model.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Left} id="a" />
                <Handle type="source" position={Position.Right} id="b" />
            </div>
        )
    }

    const modelServe = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Model serving</p>
                    {serving.length > 0 ? serving.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Left} id="a" />
                <Handle type="source" position={Position.Bottom} id="b" />
            </div>
        )
    }

    const monitoring = () => {
        return (
            <div className={styles.top}>
                <Handle type="target" position={Position.Top} />
                <div className={styles.div}>
                    <p className={styles.styler}>Model monitoring</p>
                    {monitor.length > 0 ? monitor.map((item, index) => <div className={styles.flexed} key={index}>
                        <div className={styles.column}>
                            <Image src={item.image} alt='kkk' width={30} height={30} />
                            <span>{item.name}</span>
                        </div>
                    </div>) : <p className={styles.none}>None</p>}
                </div>
                <Handle type="target" position={Position.Top} id="a" />
                <Handle type="source" position={Position.Left} id="b" />
            </div>
        )
    }

    const initialEdges = [
        { id: 'edge-1', source: 'node-1', sourceHandle: 'b', target: 'node-2', targetHandle: 'b', animated: true, type: 'step' },
        { id: 'edge-2', source: 'node-2', sourceHandle: 'a', target: 'node-4', targetHandle: 'a', animated: true, type: 'step' },
        { id: 'edge-3', source: 'node-2', sourceHandle: 'a', target: 'node-3', targetHandle: 'a', animated: true },
        { id: 'edge-4', source: 'node-3', sourceHandle: 'b', target: 'node-1', targetHandle: 'a', animated: true },
        { id: 'edge-5', source: 'node-4', sourceHandle: 'b', target: 'node-5', targetHandle: 'a', animated: true },
        { id: 'edge-6', source: 'node-3', sourceHandle: 'c', target: 'node-5', targetHandle: 'b', animated: true },
        { id: 'edge-7', source: 'node-5', sourceHandle: 'c', target: 'node-7', targetHandle: 'a', animated: true },
        { id: 'edge-8', source: 'node-5', sourceHandle: 'd', target: 'node-6', targetHandle: 'a', animated: true },
        { id: 'edge-9', source: 'node-7', sourceHandle: 'b', target: 'node-8', targetHandle: 'a', animated: true, type: 'step' },
        { id: 'edge-10', source: 'node-8', sourceHandle: 'b', target: 'node-9', targetHandle: 'a', animated: true, type: 'step' },
        { id: 'edge-11', source: 'node-9', sourceHandle: 'b', target: 'node-5', targetHandle: 'e', animated: true },
    ]

    const initialNodes = [
        { id: 'node-1', type: 'tracker', position: { x: 100, y: 0 }, data: { value: 123 } },
        { id: 'node-2', type: 'experiment', position: { x: 400, y: 0 }, data: { value: 123 } },
        { id: 'node-3', type: 'dataVersion', position: { x: 100, y: 150 }, data: { value: 123 } },
        { id: 'node-4', type: 'codeVersion', position: { x: 400, y: 150 }, data: { value: 123 } },
        { id: 'node-5', type: 'orchestration', position: { x: 400, y: 300 }, data: { value: 123 } },
        { id: 'node-6', type: 'artifactTrack', position: { x: 400, y: 450 }, data: { value: 123 } },
        { id: 'node-7', type: 'modelReg', position: { x: 700, y: 300 }, data: { value: 123 } },
        { id: 'node-8', type: 'modelServe', position: { x: 1000, y: 300 }, data: { value: 123 } },
        { id: 'node-9', type: 'monitoring', position: { x: 1000, y: 450 }, data: { value: 123 } },
    ]

    const nodeTypes = { tracker, experiment, dataVersion, codeVersion, orchestration, artifactTrack, modelReg, modelServe, monitoring };

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [rfInstance, setRfInstance] = useState(null);

    const saveToPdf = async () => {
        try {
            const canvas = await html2canvas(document.getElementById('video'));
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            const a = document.createElement("a");
            a.setAttribute("download", `info.png`);
            a.setAttribute("href", image);
            a.click();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={styles.cover}>
                <div className={styles.saveStack}>
                    <h1 className={styles.h1}>Your Stack</h1>
                    <div className={styles.shareDiv}>
                        <button onClick={saveToPdf} className={styles.share}>Download</button>
                        <button onClick={()=> setCart([])} className={styles.clear}>Clear All</button>
                    </div>
                </div>
                <p className={styles.select}>Select a tool for each category to visualize your MLOps stack architecture and get started with the tools.</p>
            </div>
            <section id='video' ref={divRef} className={styles.graph}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onInit={setRfInstance}
                    defaultZoom={0.5}
                >
                    <Controls />
                </ReactFlow>
            </section>
        </>
    )
}

export default dynamic(() => Promise.resolve(Graph), { ssr: false })