<template>
    <div>
        <Header/>
        <Navigation/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <Home/>
            <Services/>
            <NewsLetter/>
            <NewsLetterModal/>
            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Navigation from "@/components/Navigation";
    import Footer from "@/components/Footer";
    import NewsLetterModal from "@/components/NewsLetterModal";
    import NewsLetter from "@/components/NewsLetter";
    import Services from "@/components/Services";
    import Home from "@/components/Home";

    export default {
        name: "Index",
        components: {Home, Services, NewsLetter, NewsLetterModal, Footer, Navigation, Header}
    }
</script>
