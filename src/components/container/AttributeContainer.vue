<template>
  <div
    class="select-none relative pl-2"
    :style="attrWidth"
  >
    <SplitLine
      v-model:newWidth="pageStore.attrWidth"
      class="top-0 left-0 bottom-0"
      direction="vertical"
      :limit-size="limitSize"
      disabled
    />
    <div
      v-show="selectTrackOptionsConfig.length === 0"
      class="w-full h-full flex flex-col justify-center items-center"
    >
      <AttrEmptyIcon />
      <span class="text-sm">Click the track to edit</span>
    </div>
    <div class="absolute top-0 left-3 right-2 bottom-0 overflow-hidden">
      <AttrContainer
        :attr-data="selectTrackOptionsConfig"
        :track-id="trackStore.selectResource?.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AttrContainer from '@/components/item/formItem/AttrContainer.vue';
import { useTrackState } from '@/stores/trackState';
import SplitLine from '@/components/SplitLine.vue';
import { usePageState } from '@/stores/pageState';
import { computed, reactive, ref } from 'vue';
const pageStore = usePageState();
const trackStore = useTrackState();

const TrackOptionsConfig: Record<string, any> = {};
// 将data下的配置导入
const attributeFiles = import.meta.glob('@/data/options/*.ts', { eager: true });
for (const path in attributeFiles) {
  const name = path.match(/(?<=\/)(\w+)(?=\.ts)/) || [];
  TrackOptionsConfig[name[0]] = (attributeFiles[path] as { Options: Record<string, any> }).Options;
}

const selectTrackOptionsConfig = computed(() => {
  const optionsConfig = trackStore.selectResource && TrackOptionsConfig[trackStore.selectResource.type];
  return optionsConfig ? optionsConfig.attributes : [];
});
const attrWidth = computed(() => ({
  width: `${pageStore.attrWidth}px`
}));
const limitSize = reactive({
  minWidth: 300,
  maxWidth: 600
});
</script>
