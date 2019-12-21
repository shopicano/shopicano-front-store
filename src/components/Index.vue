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
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import NewsLetterModal from "@/components/indexComponents/NewsLetterModal";
    import NewsLetter from "@/components/indexComponents/NewsLetter";
    import Services from "@/components/indexComponents/Services";
    import Home from "@/components/indexComponents/Home";

    export default {
        name: "Index",
        components: {Home, Services, NewsLetter, NewsLetterModal, Footer, Navigation, Header}
    }
</script>
