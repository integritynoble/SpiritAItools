import { mappingFormItem } from '@/utils/formItemUtils';
// 元素属性配置
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
                                            attr: { col: 2 }, name: 'Location', children: [
                                                mappingFormItem('Number', {
                                                    attr: {
                                                        controlsPosition: 'right'
                                                    }, name: 'x', mappingKey: 'centerX', defaultValue: 0
                                                }),
                                                mappingFormItem('Number', {
                                                    attr: {
                                                        controlsPosition: 'right'
                                                    }, name: 'y', mappingKey: 'centerY', defaultValue: 0
                                                })
                                            ]
                                        }),
                                        mappingFormItem('Slider', {
                                            attr: {
                                                min: 1,
                                                max: 200,
                                                step: 1
                                            }, name: 'Scale', mappingKey: 'scale', defaultValue: 100, label: '%'
                                        })
                                    ]
                                })
                            ]
                        }),
                        mappingFormItem('Collapse', {
                            children: [
                                mappingFormItem('CollapsePane', {
                                    name: 'Foundation',
                                    children: [
                                        mappingFormItem('Boolean', { name: '静音', mappingKey: 'silent', defaultValue: false })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                mappingFormItem('TabPane', {
                    name: 'Anime',
                    children: []
                })
            ]
        })
    ]
};