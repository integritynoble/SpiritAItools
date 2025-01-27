import { mappingFormItem } from '@/utils/formItemUtils';

// 假设 model 是数据模型对象
const model = {
    text: 'Please enter text'
};

// 更新数据模型的逻辑
const updateModel = (value: string, vm?: any) => {
    // 更新数据模型的逻辑
    model.text = value;
    // 强制更新 UI（假设在 Vue 组件中）
    if (vm && vm.$forceUpdate) {
        vm.$forceUpdate(); // 如果是 Vue 组件
    }
};

// 元素Property配置
export const Options = {
    attributes: [
        mappingFormItem('Tabs', {
            children: [
                mappingFormItem('TabPane', {
                    name: 'Property',
                    children: [
                        mappingFormItem('Collapse', {
                            children: [
                                mappingFormItem('CollapsePane', {
                                    name: 'Location',
                                    children: [
                                        mappingFormItem('Flex', {
                                            attr: { col: 2 },
                                            name: 'Location',
                                            children: [
                                                mappingFormItem('Number', {
                                                    attr: {
                                                        controlsPosition: 'right'
                                                    },
                                                    name: 'x',
                                                    mappingKey: 'centerX',
                                                    defaultValue: 0
                                                }),
                                                mappingFormItem('Number', {
                                                    attr: {
                                                        controlsPosition: 'right'
                                                    },
                                                    name: 'y',
                                                    mappingKey: 'centerY',
                                                    defaultValue: 0
                                                })
                                            ]
                                        }),
                                        mappingFormItem('Slider', {
                                            attr: {
                                                min: 1,
                                                max: 200,
                                                step: 1
                                            },
                                            name: 'Scale',
                                            mappingKey: 'scale',
                                            defaultValue: 100,
                                            label: '%'
                                        })
                                    ]
                                })
                            ]
                        }),
                        mappingFormItem('Collapse', {
                            children: [
                                mappingFormItem('CollapsePane', {
                                    name: 'Text',
                                    children: [
                                        mappingFormItem('Number', {
                                            attr: {
                                                controlsPosition: 'right'
                                            },
                                            name: 'Fontsize',
                                            mappingKey: 'fontSize',
                                            defaultValue: 40
                                        }),
                                        mappingFormItem('TextArea', {
                                            attr: {
                                                autosize: {
                                                    minRows: 1,
                                                    maxRows: 4
                                                },
                                                placeholder: 'Please enter text',
                                                value: model.text, // 绑定到数据模型的 text 属性
                                                onChange: (value: string) => {
                                                    // 更新数据模型
                                                    updateModel(value, this); // 传递 this
                                                    // 确保 UI 更新
                                                    if (this && this.$forceUpdate) {
                                                        this.$forceUpdate();
                                                    }
                                                },
                                                onInput: (e: Event) => {
                                                    // 处理输入事件，确保删除操作也能触发更新
                                                    const target = e.target as HTMLTextAreaElement;
                                                    updateModel(target.value, this); // 更新数据模型
                                                    if (this && this.$forceUpdate) {
                                                        this.$forceUpdate();
                                                    }
                                                }
                                            },
                                            name: 'Element',
                                            mappingKey: 'text',
                                            defaultValue: 'Please enter text'
                                        }),
                                        mappingFormItem('Color', {
                                            name: 'Color',
                                            mappingKey: 'style.fill',
                                            defaultValue: '#ffffff'
                                        }),
                                        mappingFormItem('Color', {
                                            name: 'Stroke',
                                            mappingKey: 'style.stroke'
                                        }),
                                        mappingFormItem('Color', {
                                            name: 'Background',
                                            mappingKey: 'style.textBackgroundColor'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                mappingFormItem('TabPane', {
                    name: 'Anime ',
                    children: []
                })
            ]
        })
    ]
};