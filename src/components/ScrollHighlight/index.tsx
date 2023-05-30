import { defineComponent, ref,onMounted, reactive } from 'vue'
import styles from './index.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ScrollHighlight = defineComponent({
  setup() {
    const activeIndex = ref(0);
    const reactiveTextList = reactive([]) as Array<Element | null>;
    const textList: Array<string> = [
      '这个常伴你左右的好伙伴，超有能耐。',
      '体温感应功能，帮女性洞察自身的健康；',
      '车祸检测待命，紧急时刻主动呼叫救援；',
      '睡眠阶段跟测，让你更了解自己的睡眠',
      '还有进阶的体能训练 app，为锻炼加分。',
      '就让一个更健康的未来，更漂亮地开始吧。',
    ]
    gsap.registerPlugin(ScrollTrigger);

    function renderText(vo:string, index: number) {
      return <span class={ index === activeIndex.value && styles.active } ref={(ele) => reactiveTextList.push(ele as Element)}>{vo}</span>
    }
    onMounted(() => {
      reactiveTextList.forEach((ele, index) => {
        ScrollTrigger.create({
          trigger: ele,
          start: "top, 50%",
          end: 'bottom, 50%',
          onEnter() {
            console.log('onEnter',index)
            activeIndex.value = index
          },
          onEnterBack() {
            console.log('onEnterBack',index)
            activeIndex.value = index
          }
        });
      })
    });
    return () => (
      <div class={styles.scrollHighlight}>
        {textList.map(renderText)}
      </div>
    )
  }
})

export default ScrollHighlight
